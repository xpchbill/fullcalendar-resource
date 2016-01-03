"use strict";

var fs = require("fs");
var gulp = require("gulp");
var runSeq = require("run-sequence");
var inject = require("gulp-inject");
var changed = require("gulp-changed");
var del = require("del");
var webpack = require("webpack");
var bs = require("browser-sync").create();
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DEV = 1, PROD = 2;

function build(mode, done) {
  var opts = {
    entry: {
      "fullcalendar.resource": "./src/resource/main.js",
      "../app": "./src/app.js"
    },
    output: {
      path: "dist/js",
      filename: mode === DEV ? "[name].js" : "[name].min.js"
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel",
          query: {
            presets: ["es2015"],
            cacheDirectory: true
          }
        },
        {
          test: /\.less$/,
          exclude: /(node_modules|bower_components)/,
          loader: mode === DEV
            ? ExtractTextPlugin.extract("css?-minimize&sourceMap!autoprefixer?{browsers:['last 2 versions', 'ie 9']}!less?sourceMap")
            : ExtractTextPlugin.extract("css?minimize!autoprefixer?{browsers:['last 2 versions', 'ie 9']}!less")
        },
        { test: /\.html$/, loader: "mustache" }
      ]
    },
    resolve: {
      extensions: ["", ".js", ".html"],
      modulesDirectories: ["src", "node_modules"]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    plugins: [
      new ExtractTextPlugin(
        mode === DEV ? "../css/[name].css" : "../css/[name].min.css",
        {allChunks: true}
      )
    ]
  };

  switch (mode) {
  case DEV:
    opts.watch = true;
    opts.devtool = "inline-source-map";
    break;
  case PROD:
    opts.plugins = opts.plugins.concat([
      new webpack.DefinePlugin({
        NODE_ENV: "production"
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]);
    break;
  }

  var firstTime = true;

  webpack(opts, function(err, stats) {
    console.log(stats.toString({colors: true}));
    if (!err && firstTime && done) {
      firstTime = false;
      done();
    }
  });
}

gulp.task("default", ["watch"]);

gulp.task("clean", function(done) {
  return del(["dist"], done);
});

gulp.task("watch", function(done) {
  return runSeq("clean", "watchBuild", "devCopyLibs", "copyInjectedFiles", "browserSync", done);
});

gulp.task("prod", function(done) {
  return runSeq("clean", "prodBuild", "prodCopyLibs", "copyInjectedFiles", "browserSync", done);
});

gulp.task("watchBuild", function(done) {
  return build(DEV, done);
});

gulp.task("prodBuild", function(done) {
  return build(PROD, done);
});

function copyLibs(mode, done) {
  var list = [
    mode === DEV ? "./lib/moment/moment.js" : "./lib/moment/min/moment.min.js",
    mode === DEV ? "./lib/jquery/dist/jquery.js" : "./lib/jquery/dist/jquery.min.js"
  ];
  if(mode === DEV){
    list = list.concat([
      "./lib/fullcalendar/*.js",
      "./lib/fullcalendar/*.css",
      "./lib/fullcalendar/*.map",
      "./lib/fullcalendar/src/**/*.*"
    ]);
  }else{
    list = list.concat([
      "./lib/fullcalendar/dist/fullcalendar.min.*",
      "./lib/fullcalendar/dist/fullcalendar.print.css"
    ]);
  }
  return gulp.src(list, {base: "./lib"})
    .pipe(gulp.dest("./dist/lib"));
}

gulp.task("devCopyLibs", function(done) {
  return copyLibs(DEV, done);
});

gulp.task("prodCopyLibs", function(done) {
  return copyLibs(PROD, done);
});

gulp.task("copyInjectedFiles", function(done) {
  return gulp.src("src/index.html")
    .pipe(changed("dist"))
    .pipe(gulp.dest("dist"))
    .pipe(inject(gulp.src([
      "./dist/lib/fullcalendar/**/fullcalendar*.css",
      "./dist/lib/moment/moment.js",
      "./dist/lib/moment/*/moment*.js",
      "./dist/lib/jquery/dist/jquery*.js",
      "./dist/lib/fullcalendar/**/fullcalendar*.js",
      "./dist/js/fullcalendar.resource*.js",
      "./dist/css/fullcalendar.resource*.css",
      "./dist/app*.css",
      "./dist/app*.js"
    ], {read: false}), {
      ignorePath: "dist/",
      transform: function (filepath) {
        if (filepath.slice(-4) === '.css') {
          var isPrint = filepath.slice(-9) === 'print.css';
          var tag = [
            "<link href='",
            filepath,
            "'",
            " rel='stylesheet' ",
            isPrint ? "media='print'" : "",
            "/>"
          ].join("");

          return tag;
        }
        // Use the default transform as fallback:
        return inject.transform.apply(inject.transform, arguments);
      }
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("browserSync", function() {
  bs.init({
    server: {
      baseDir: "dist",
      middleware: function(req, res, next) {
        if (req.url ===  "/") req.url = "/index.html";
        if (!fs.existsSync("dist/" + req.url)) req.url = "/" + req.url.split("/")[1] + ".html";
        next();
      }
    },
    files: ["dist/*"],
    startPath: "/"
  });
});

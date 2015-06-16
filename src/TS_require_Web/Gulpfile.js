var gulp = require('gulp'),
    rimraf = require('rimraf'),
    ts = require('gulp-typescript'),
    merge = require('merge'),
    sourcemaps = require('gulp-sourcemaps'),
    fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
    npm: './node_modules/',
    lib: "./" + project.webroot + "/lib/",
    tsSource: './TypeScript/app/**/*.ts',
    tsOutput: "./" + project.webroot + '/scripts/app/',
    tsDef: "./TypeScript/definitions/"
};

gulp.task("clean", function (cb) {
    rimraf(paths.tsOutput, cb);
});

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: true,
    module: 'AMD'
    //,
    //removeComments: true
});

//TODO: Fix source maps
gulp.task('ts-compile', function () {
    var tsResult = gulp.src(paths.tsSource).pipe(ts(tsProject));

    return merge([
		tsResult.dts.pipe(gulp.dest(paths.tsDef)),
		tsResult.js.pipe(gulp.dest(paths.tsOutput))
    ]);
});

gulp.task('watch', ['ts-compile'], function () {
    gulp.watch(paths.tsDef, ['ts-compile']);
});

gulp.task("copy", function () {
    var npm = {
        "requirejs": "requirejs/require.js"
    }

    for (var destinationDir in npm) {
        gulp.src(paths.npm + npm[destinationDir])
          .pipe(gulp.dest(paths.lib + destinationDir));
    }
});


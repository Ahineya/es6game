var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var karma = require('gulp-karma');

gulp.task('lint', function () {
    return gulp.src(['src/**/*.js', 'test/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task("watch", function () {
    gulp.watch('src/**/*.js', ['default'])
});

gulp.task("testJSfiles", ['lint'], function() {
    return gulp.src('./test/**/*.js')
        .pipe(karma({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        })).on('error', function(err) {
            this.emit('end');
        });
});

gulp.task('default', ['testJSfiles'], function () {
    var extensions = ['.js','.json','.es6'];
    browserify({
        entries: './src/main.js',
        debug: true
    })
        .transform(babelify.configure({
            extensions: extensions
        }))
        .bundle()
        .pipe(source('planetaria.js'))
        .pipe(gulp.dest('./dist'));
});


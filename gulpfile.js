const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const scripts = require('./scripts');
const styles = require('./styles');


var devMode = false;

gulp.task('sass', function() {
    gulp.src(styles)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts', function() {
    gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
    gulp.src('./src/templates/**/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', function() {
    gulp.start(['sass', 'scripts', 'html']);
});

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('start', function () {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./src/sass/**/*.scss'], ['sass']);
    gulp.watch(['./src/scripts/**/*.js'], ['scripts']);
    gulp.watch(['./src/templates/**/*.html'], ['html']);
});
var node
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename'),
    spawn = require('child_process').spawn,
    htmlmin = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

    gulp.watch(['./index.js', ['server']]);

    gulp.task('start', ['scripts','minify','compile-sass','server'])

    gulp.task('scripts', function() {

      var files = [
        'src/index.js',
        'src/app/app.js'
      ]

      return gulp.src(files, {base: '../survey-app/src'})
        .pipe(jshint.reporter('default'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'Scripts task complete' }));
    });

    gulp.task('minify', function() {
      console.log("minifying")
      return gulp.src('src/app/**/*.html', {base: '../survey-app/src'})
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'Minify task complete' }));
    });

    gulp.task('compile-sass', function() {
      return gulp.src('src/app/**/*.scss', {base: '../survey-app/src'})
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'Compile sass task complete' }));

    });
    
    gulp.task('server', function() {
      if (node) node.kill()
      node = spawn('node', ['dist/index.min.js'], {stdio: 'inherit'})
      node.on('close', function (code) {
        if (code === 8) {
          gulp.log('Error detected, waiting for changes...');
        }
      });
    })

    // clean up if an error goes unhandled.
    process.on('exit', function() {
        if (node) node.kill()
    })
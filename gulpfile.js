// This gulpfile is largely a copy paste from what I have build earlier
// I also have one that reloads a Node server if we end up running our own PeerJS server
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./sass/main.sass')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('./js/*.js')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:build', function() {
  return gulp.src('./sass/main.sass')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('js:build', function() {
  return gulp.src('./js/*.js')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['sass:build, js:build']);

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('serve', ['sass', 'js'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./sass/*.sass', ['sass']);
  gulp.watch('./js/*.js', ['js-watch']);
});

gulp.task('default', ['serve']);

function errorAlert(error){
  notify.onError({title: "Gulp Error", message: "Beep beep beep, stuffs going down. Check the console.", sound: true})(error); //Error Notification
  console.log(error.toString()); //Prints Error to Console
  this.emit("end"); //End function
}

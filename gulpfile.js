const gulp = require('gulp');
const sass = require('gulp-sass');
//var uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concatCss = require('gulp-concat-css');

const styles = {
	from: './sass/*.scss',
	to: './css'
}

gulp.task('sass', function () {
  return gulp.src(styles.from)
    .pipe(concatCss("theme.css"))
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss())
    .pipe(gulp.dest(styles.to));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', gulp.series('sass'));
});
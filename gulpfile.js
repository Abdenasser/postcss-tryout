const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

gulp.task('css', function() {
  gulp.src('css/app.css')
    .pipe(postcss([]))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('css/'))
})

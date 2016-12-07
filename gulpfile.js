const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

var autoprefixer = require('autoprefixer');

gulp.task('css', function() {
  gulp.src('css/app.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 5 versions'] }) ]))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('css/'))
})

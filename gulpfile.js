const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

var processors = [
  require('postcss-nested'),
  require('rucksack-css'),
  require('autoprefixer')({ browsers: ['last 5 versions'] }),
  // require('cssnano'),
]

gulp.task('css', function() {
  gulp.src('css/app.css')
    .pipe(postcss(processors))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('css/'))
})

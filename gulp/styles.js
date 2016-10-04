var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
gulp.task('styles', function(){
  gulp.src('styles/*.css')
    .pipe(concat('style.css'))
    .pipe(uglifycss({'uglyComments':true}))
    .pipe(gulp.dest('assets'));
});

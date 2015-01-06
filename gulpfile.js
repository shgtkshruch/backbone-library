var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

// Copy libraries from bower_components to lib directory.
gulp.task('default', function () {
  gulp.src(mainBowerFiles({}), {base: './bower_components'})
    .pipe(gulp.dest('./site/js/lib'));
});

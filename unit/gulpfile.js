var gulp= require('gulp');
var imageisux = require('gulp-imageisux');

gulp.task('imageisux', function() {
    return gulp.src(['img/*'])
        .pipe(imageisux('/dirpath/',true,true));
});
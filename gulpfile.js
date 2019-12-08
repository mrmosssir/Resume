var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', gulp.series(function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/stylesheet'));
})); 

gulp.task('watch', gulp.series(function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
}));

gulp.task('default', gulp.series(['sass', 'watch']));
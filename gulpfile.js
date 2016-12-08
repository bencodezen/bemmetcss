var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('default', function() {

})

gulp.task('css', function() {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/css'))
})

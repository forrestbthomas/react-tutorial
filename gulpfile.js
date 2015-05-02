var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

gulp.task('build', function() {
	browserify(['./src/index.jsx'])
		.transform('reactify')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
	gulp.watch(['./src/**/*.jsx'], ['build'])
})

gulp.task('default', ['build', 'watch']);
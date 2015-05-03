var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
var express = require('express');
var app = express();
var path = require('path');

gulp.task('build', function() {
	browserify(['./src/index.jsx'])
		.transform('reactify')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('serve', function() {
	app.get('/', function(request, response) {
		response.sendFile(path.join(__dirname + '/index.html'));
	});
	app.get('/bundle', function(request, response) {
		response.sendFile(path.join(__dirname + '/bundle.js'));
	})
	app.listen(3000);
})

gulp.task('watch', function() {
	gulp.watch(['./src/**/*.jsx'], ['build'])
})

gulp.task('default', ['build', 'serve', 'watch']);
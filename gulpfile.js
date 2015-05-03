var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
var express = require('express');
var app = express();
var path = require('path');
var livereload = require('gulp-livereload');
var plugins = require('gulp-load-plugins')();

gulp.task('build', function() {
	browserify(['./src/index.jsx'])
		.transform('reactify')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./'))
		.pipe(plugins.livereload());
});

gulp.task('serve', function() {
	app.get('/', function(request, response) {
		response.sendFile(path.join(__dirname + '/index.html'));
	});
	app.get('/bundle', function(request, response) {
		response.sendFile(path.join(__dirname + '/bundle.js'));
	});
	server = app.listen(3000);
});

gulp.task('watch', function() {
	plugins.livereload.listen();
	gulp.watch(['./src/**/*.jsx'], ['build']);
});

gulp.task('default', ['build', 'serve', 'watch']);
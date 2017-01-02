var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var minify = require('gulp-minify');
var replace = require('gulp-replace');
var bump = require('gulp-bump');
var shell = require('gulp-shell')
var p = require('./package.json')

gulp.task('clean', function () {
	return del([
		'dist',
	]);
});

gulp.task('removePackage', function () {
	return del([
		'dist/package.json',
	]);
});

gulp.task('bump', function(){
	return gulp.src('./package.json')
		.pipe(bump({type:'patch'}))
		.pipe(gulp.dest('./'));
});

/* global gulp */
gulp.task('copy', function () {
	return gulp
		.src(['package.json', 'README.md', 'LICENSE'])
		.pipe(gulp.dest('dist'));
});

// 	'parse deploy',
gulp.task('publish', shell.task([
	'npm publish',
], {cwd: 'dist/'}))

// 	'parse deploy',
gulp.task('babel', shell.task([
	'babel src --out-dir dist',
]))

gulp.task('default', ['build']);

gulp.task('build', function(callback) {
	runSequence(
		'clean',
		'bump',
		'babel',
		['copy'],
		callback);
});

gulp.task('deploy', function(callback) {
	runSequence(
		'build',
		'publish',
		callback);
});

gulp.task('default', ['build']);
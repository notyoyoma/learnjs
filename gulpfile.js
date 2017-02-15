var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp_files');

gulp.task('default', ['browserSync', 'pug'], function() {
	gulp.watch('app/**/*.pug', ['pug']);
});

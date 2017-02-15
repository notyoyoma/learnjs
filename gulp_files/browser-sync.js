var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task ('server', function() {
	return browserSync.init({
		open: 'external',
		files: ['dist/index.html', 'dist/assets/stylesheet/*.css', 'dist/assets/js/*.js'],
		server: { baseDir: './dist/', }

	});

});

gulp.task('browserSync', ['server']);
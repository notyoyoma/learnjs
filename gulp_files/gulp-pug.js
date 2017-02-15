var gulp = require('gulp');
var pug = require('gulp-pug');
var humanize = require('string-humanize');

gulp.task('pug', function() {
	return gulp.src('app/**/!(_)*.pug')
		.pipe(pug({
			pretty: true,
            locals: {
                'humanize': humanize
            }
		}))
		.pipe(gulp.dest('./dist/'));
});

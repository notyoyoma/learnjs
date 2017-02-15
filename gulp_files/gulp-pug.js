var gulp = require('gulp');
var pug = require('gulp-pug');
var humanize = require('string-humanize');

var glob = require('glob');

var pages = [];
glob('app/!(_|index)*.pug', {}, function(er, files){
    for (var i=0; i<files.length; i++) {
        pages.push(files[i].match(/^app\/([^.]*).pug/)[1]);
    }
});

gulp.task('pug', function() {
	return gulp.src('app/**/!(_)*.pug')
		.pipe(pug({
			pretty: true,
            locals: {
                'humanize': humanize,
                'pages': pages
            }
		}))
		.pipe(gulp.dest('./dist/'));
});

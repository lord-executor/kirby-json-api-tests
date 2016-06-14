var gulp = require('gulp');
var browserSync = require('browser-sync');
var php = require('gulp-connect-php');


var config = {
	serverRoot: './web/'
};


gulp.task('build', function () {

});

// Local Server Stuff
gulp.task('browser-sync', function(done) {
	return php.server({
		base: config.serverRoot,
		port: 10080,
		keepalive: true,
	}, function () {
		browserSync({
			proxy: '127.0.0.1:10080',
		});

		done();
	});
});

gulp.task('run', ['browser-sync'], function() {
});

gulp.task('default', ['build']);

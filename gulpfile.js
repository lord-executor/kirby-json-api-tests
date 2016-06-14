var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var php = require('gulp-connect-php');
var Jasmine = require('jasmine');


var config = {
	serverRoot: './web/'
};


gulp.task('build', function () {

});

gulp.task('test', ['build'], function (done) {
	php.server({
		base: config.serverRoot,
		port: 10080,
		keepalive: false,
		//stdio: 'ignore',
	}, function () {
		var jasmine = new Jasmine();

		jasmine.loadConfigFile('spec/support/jasmine.json');
		jasmine.onComplete(function(passed) {
			php.closeServer(() => done());
		});
		jasmine.execute();
	});
});

// Local Server Stuff
gulp.task('browser-sync', ['build'], function(done) {
	return php.server({
		base: config.serverRoot,
		port: 10080,
		keepalive: true,
	}, function () {
		browserSync.init({
			proxy: '127.0.0.1:10080',
		}, function () {
			done();
		});
	});
});

gulp.task('run', ['browser-sync'], function() {
});

gulp.task('default', ['build']);


module.exports = function () {
	var segments = ['http://localhost:10080/api'];
	segments.push.apply(segments, Array.prototype.slice.call(arguments));
	return segments.join('/');
};

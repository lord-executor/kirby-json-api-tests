
var request = require('request');
var apiUrl = require('../helpers/api-url-helper');
var includesPageApi = require('../helpers/base-page-spec');


describe('Built-In "tree" API', function () {

	includesPageApi('tree');

	it('contains the page\'s children as objects', function (done) {

		request(apiUrl('tree', 'root'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.children).toBeDefined();
			expect(Array.isArray(page.children)).toBe(true);
			expect(typeof(page.children[0])).toBe('object');

			done();
		});
	});

	it('contains the page\'s files', function (done) {

		request(apiUrl('tree', 'root'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.files).toBeDefined();
			expect(Array.isArray(page.files)).toBe(true);

			done();
		});
	});

});

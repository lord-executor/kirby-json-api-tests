
var request = require('request');
var apiUrl = require('../helpers/api-url-helper');
var includesPageApi = require('../helpers/base-page-spec');


describe('Built-In "node" API', function () {

	includesPageApi('node');

	it('contains the page\'s child IDs', function (done) {

		request(apiUrl('node', 'root'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.children).toBeDefined();
			expect(Array.isArray(page.children)).toBe(true);
			expect(page.children).toContain('root/child-one');

			done();
		});
	});

	it('contains the page\'s files', function (done) {

		request(apiUrl('node', 'root'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.files).toBeDefined();
			expect(Array.isArray(page.files)).toBe(true);

			done();
		});
	});

});

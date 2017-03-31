
var request = require('request');
var apiUrl = require('../helpers/api-url-helper');


describe('Language handling', function () {

	it('returns the root page with values from the default language', function (done) {

		request(apiUrl('node', 'root', '?lang=de'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.text.substring(0, 16)).toBe('text field value');

			done();
		});
	});

	it('returns a page with default meta fields (root)', function (done) {

		request(apiUrl('node', 'root', '?lang=de'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.id).toBe('root');
			expect(page.url).toBe('http://127.0.0.1:10080/de/root');
			expect(page.uid).toBe('root');

			done();
		});
	});

	it('returns a page that does not contain fields that don\'t exist', function (done) {

		request(apiUrl('node', 'root/child-one', '?lang=de'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.nextnode).toBeUndefined();
			expect(page.structured).toBeUndefined();

			done();
		});
	});

	it('returns translated fields', function (done) {

		request(apiUrl('node', 'root/child-one', '?lang=de'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.title).toBe('Kind Eins');
			expect(page.text).toBe('Das ist das erste Kind');

			done();
		});
	});

	it('returns default language value for empty fields', function (done) {

		request(apiUrl('node', 'root/child-one', '?lang=de'), function (error, response, body) {
			var page = JSON.parse(body);

			expect(page.value).toBe('42.1');

			done();
		});
	});

});

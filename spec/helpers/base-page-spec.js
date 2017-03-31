
var request = require('request');
var apiUrlHelper = require('../helpers/api-url-helper');

module.exports = (segment) => {

	var apiUrl = function (path) {
		return apiUrlHelper(segment, path);
	};

	describe(' includes "page" API', function () {

		it('responds with status code 200 for existing pages', function (done) {

			request(apiUrl('root'), function (error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});

		it('responds with status code 404 and error detail for pages that don\'t exist', function (done) {

			request(apiUrl('fail'), function (error, response, body) {
				expect(response.statusCode).toBe(404);

				var detail = JSON.parse(body);

				expect(detail.status).toBe('error');
				expect(detail.code).toBe(404);
				expect(detail.data).toBeDefined();
				expect(detail.data.id).toBe('fail');

				done();
			});
		});

		it('returns the root page if requested', function (done) {

			request(apiUrl('root'), function (error, response, body) {
				var page = JSON.parse(body);

				expect(page.id).toBe('root');

				done();
			});
		});

		it('returns a page to contain default meta fields (root)', function (done) {

			request(apiUrl('root'), function (error, response, body) {
				var page = JSON.parse(body);

				expect(page.id).toBe('root');
				expect(page.url).toBe('http://127.0.0.1:10080/root');
				expect(page.uid).toBe('root');

				done();
			});
		});

		it('returns a page to contain default meta fields (child-one)', function (done) {

			request(apiUrl('root/child-one'), function (error, response, body) {
				var page = JSON.parse(body);

				expect(page.id).toBe('root/child-one');
				expect(page.url).toBe('http://127.0.0.1:10080/root/child-one');
				expect(page.uid).toBe('child-one');

				done();
			});
		});

		it('returns all the fields of the page (root)', function (done) {

			request(apiUrl('root'), function (error, response, body) {
				var page = JSON.parse(body);

				expect(page.title).toBe('Root');
				expect(page.value).toBe('42');
				expect(page.nextnode).toBeUndefined();

				done();
			});
		});

		it('returns all the fields of the page (child-one)', function (done) {

			request(apiUrl('root/child-one'), function (error, response, body) {
				var page = JSON.parse(body);

				expect(page.title).toBe('Child One');
				expect(page.value).toBe('42.1');
				expect(page.nextnode).toBe('root');
				expect(page.structured instanceof Array).toBe(true);
				expect(page.structured.length).toBe(3);
				expect(page.structured[1].title).toBe('Sub-Item 2');

				done();
			});
		});

	});

}

<!DOCTYPE html>
<html lang="<?php echo $site->language()->code(); ?>">
<head>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	<title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
	<meta name="description" content="<?php echo $site->description()->html() ?>">
	<meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

	<?php echo css('assets/css/styles.css') ?>

	<script type="text/javascript">
		/**
		 * Kirby JavaScript settings object. It contains settings and functions that JavaScript code
		 * potentially needs to know about when dealing with Kirby
		 */
		window.Kirby = {
			lang: '<?php echo $site->language()->code(); ?>',
			apiPrefix: '<?php echo c::get('jsonapi.prefix', 'api'); ?>',
			baseUrl: '<?php echo $site->url(); ?>',
			langUrl: '<?php echo $site->language()->url(); ?>',
			url: function (path) {
				return this.baseUrl + (path && path[0] === '/' ? path : '/' + path);
			},
			pageUrl: function (path) {
				return this.langUrl + (path && path[0] === '/' ? path : '/' + path);
			},
			apiUrl: function (path) {
				var url = this.baseUrl + '/' + this.apiPrefix + (path && path[0] === '/' ? path : '/' + path);
				url += (url.indexOf('?') < 0 ? '?' : '&') + 'lang=' + this.lang;
				return url;
			},
		};
	</script>

</head>
<body>

	<header class="header cf" role="banner">
		<?php snippet('menu') ?>
	</header>

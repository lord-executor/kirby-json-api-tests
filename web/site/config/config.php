<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

c::set('languages', array(
	array(
		'code'    => 'en',
		'name'    => 'English',
		'default' => true,
		'locale'  => 'en_US',
		'url'     => '/',
	),
	array(
		'code'    => 'de',
		'name'    => 'Deutsch',
		'locale'  => 'de_DE',
		'url'     => '/de',
	),
));

/*
JSON API Configuration
*/
c::set('jsonapi.built-in.enabled', true);
// this is for demonstration purposes ONLY - in any kind of "real world" application
// this should be set to _some_ form of authentication as described in the documentation
c::set('jsonapi.built-in.auth', false);
// set this to _false_ if you want to disable automatic detection & processing of structured fields
c::set('jsonapi.auto-structured', true);


c::set('debug', true);

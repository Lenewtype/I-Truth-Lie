(function(){
	'use strict';

	angular.module('iTruthLie.angular.home', []);

	angular.module('iTruthLie.angular', [

		'ngRoute',
		'ngResource',

		'iTruthLie.angular.home'
	]).run(function($log){
		$log.log('Loaded');
	});
})();
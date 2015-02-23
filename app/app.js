(function(){
	'use strict';
	angular.module('iTruthLie.angular.nav', ['mgcrea.ngStrap'])
	angular.module('iTruthLie.angular.home', []);
	angular.module( 'iTruthLie.angular.devilKitty', []);
	angular.module( 'iTruthLie.angular.chateauLaTour', []);
	angular.module( 'iTruthLie.angular.gokiburi', []);
	angular.module( 'iTruthLie.angular.karMaria', []);
	angular.module( 'iTruthLie.angular.solo', []);
	angular.module( 'iTruthLie.angular.deadlySanctuary', []);
	angular.module( 'iTruthLie.angular.kiga', []);
	angular.module( 'iTruthLie.angular.early', []);
	angular.module( 'iTruthLie.angular.about', []);
	angular.module('iTruthLie.angular', [

		'ngRoute',
		'ngResource',
		'mgcrea.ngStrap',
		'iTruthLie.angular.home',
		'iTruthLie.angular.nav',
		'iTruthLie.angular.devilKitty',
		'iTruthLie.angular.chateauLaTour',
		'iTruthLie.angular.gokiburi',
		'iTruthLie.angular.karMaria',
		'iTruthLie.angular.solo',
		'iTruthLie.angular.deadlySanctuary',
		'iTruthLie.angular.kiga',
		'iTruthLie.angular.early', 
		'iTruthLie.angular.about',
		'iTruthLie.angular'
	]).run(function($log){
		$log.log('Loaded');
	});
})();
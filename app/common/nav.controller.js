angular.module('iTruthLie.angular.nav')
	.controller('NavController', function($scope, $location){
		$scope.message ="hello";
		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
	});
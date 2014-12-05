angular.module('iTruthLie.angular.home')
	.controller('HomeController', function($scope, $location){

		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
	});
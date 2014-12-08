angular.module('iTruthLie.angular.solo')
	.controller('SoloController', function($scope, $location){

		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
	});
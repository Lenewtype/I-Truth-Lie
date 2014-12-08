angular.module('iTruthLie.angular.gokiburi')
	.controller('GokiburiController', function($scope, $location){

		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
	});
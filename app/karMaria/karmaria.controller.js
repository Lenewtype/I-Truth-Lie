angular.module('iTruthLie.angular.karMaria')
	.controller('KarMariaController', function($scope, $location){

		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
	});
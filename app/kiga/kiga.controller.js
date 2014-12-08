angular.module('iTruthLie.angular.kiga')
	.controller('KigaController', function($scope, $location){

		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
	});
angular.module('iTruthLie.angular.chateauLaTour')
	.controller('ChateauLaTourController', function($scope, $location){

		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
	});
angular.module('iTruthLie.angular.deadlySanctuary')
	.controller('DeadlySanctuaryController', function($scope, $location){

		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
	});
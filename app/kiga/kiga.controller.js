angular.module('iTruthLie.angular.kiga')
	.controller('KigaController', function($scope, $location){

		$scope.albums = [];
        $scope.albums['album'] = {
            name: 'street～step up～',
            type: 'Mini-album',
            date: '07/03/2003',
            tracks: [{title: 'I won\'t break'}, {title:'Step up'}, {title:'Charisma facker'}, {title:'向かう所勝ち戦', romaji: 'Mukau Tokoro Kachi Ikusa'}],
            albumArt: 'kiga/images/kiga.jpg'
        };
	});
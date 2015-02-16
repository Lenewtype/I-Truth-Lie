angular.module('iTruthLie.angular.karMaria')
	.controller('KarMariaController', function($scope, $location){

		$scope.gotoPage = function(pageName){
			$location.path('/'+pageName);
		};
        $scope.albums = [];
        $scope.albums['maria'] = {
            name: 'Maria',
            type: 'Single',
            date: '09/26/2001',
            price: '¥1,575',
            tracks: [{title: 'Maria'}, {title:'毒舌2ちゃんねラー', romaji:'dokuzetsu 2-chan neraa'}, {title:'Karma'}],
            albumArt: 'maria.jpg'
        };
        $scope.albums['reset'] = {
            name: 'Reset',
            type: 'Mini-album',
            date: '05/30/2001',
            price: '¥2,100',
            tracks: [{title: 'Deep Love'}, {title: 'Chain'}, {title: 'a habit'}, {title: 'I than Reset you'}, {title:'約束', romaji:'Yakusoku'}/*, {title:'「」'}*/],
            albumArt: 'reset.jpg'
        };
        $scope.albums['reset2'] = {
            name: 'Reset (Second Press)',
            type: 'Mini-album',
            date: '09/xx/2001',
            price: '¥2,100',
            tracks: [{title: 'Deep Love'}, {title: 'Chain'}, {title: 'a habit'}, {title: 'I than Reset you'}, {title:'約束', romaji:'Yakusoku'}, {title:'「」'}],
            albumArt: 'blank.png'
        };
        $scope.albums['untitled'] = {
            name: '[Untitled]',
            type: 'Live-distributed Single',
            date: '09/24/2001',
            price: '¥0',
            tracks: [{title: 'マリア', romaji: 'MARIA'}, {title: 'さよなら妄想ちゃん', romaji: 'Sayonara Mousou-chan'}],
            albumArt: 'blank.png'
        };
        $scope.albums['kaleidoscope'] = {
            name: 'Kaleidoscope',
            type: 'Omnibus',
            date: '06/01/2003',
            price: '¥??',
            tracks: [{title: '約束', romaji: 'Yakusoku'}],
            albumArt: 'kaleidoscope.png'
        };
        $scope.albums['untitled2'] = {
            name: '[Untitled]',
            type: 'Live-distributed Single',
            date: '09/25/2001',
            price: '¥0',
            tracks: [{title: 'あきの曲だゴルァ!!', romaji: 'Aki no Kyoku da GORUa!!'}, {title: 'バラードだゴルァ!!', romaji: 'BALLAD da GORUa!!'}],
            albumArt: '11_24.png'
        };
	});
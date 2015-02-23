angular.module('iTruthLie.angular.gokiburi')
	.controller('GokiburiController', function($scope, $location){

		$scope.albums = [];
        $scope.albums['maguro'] = {
            name: '〜伝説の流布〜',
            romaji: '~Densetsu no Rufu~',
            type: 'Single',
            date: '05/16/2012',
            price: '¥10',
            tracks: [{title: 'MAGURO'}, {title:'肉便器', romaji:'Niku Benki'}],
            albumArt: 'gokiburi/images/discog/maguro.jpg'
        };
        $scope.albums['yakusoku'] = {
            name: '約束',
            romaji: 'Yakusoku',
            type: 'Live-distributed Single',
            date: '03/24/2013',
            tracks: [{title: '約束', romaji: 'Yakusoku'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['rockstar'] = {
            name: 'ROCKSTARの恋',
            romaji: 'ROCKSTAR no Koi',
            type: 'Live-distributed Single',
            date: '03/24/2013',
            tracks: [{title: 'ROCKSTARの恋 (Remix Ver.)', romaji: 'ROCKSTAR no Koi (Remix Ver.)'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['G'] = {
            name: '黒い彗星-G-',
            romaji: 'Kuroi Suisei -G-',
            type: 'Album',
            date: '04/10/2013',
            tracks: [{title: 'ROCKSTARの恋 (Remix Ver.)', romaji: 'ROCKSTAR no Koi (Remix Ver.)'}],
            albumArt: 'gokiburi/images/discog/g.jpg'
        };

	});
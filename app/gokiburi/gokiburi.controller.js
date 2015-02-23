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
            tracks: [{title: ' 性獣～A GOD OF SEX～', romaji: 'Sei-Jyuu~A GOD OF SEX~'}, {title: 'Karma'}, {title:'DQNなエセ麺カノ', romaji: 'DQNna ESE MenKANO'}, {title: 'セフレ。', romaji: 'SEFURE。'},
            {title: 'COBRA'}, {title: '肉便器', romaji: 'Niku Benki'}, {title: '死ねばいいのに。', romaji: 'Shineba ii no ni。'}, {title: 'ホモダチの輪', romaji: 'HOMODACHI no Wa'}, {title: 'MAGURO'},
            {title: 'MK5'}, {title: 'LOVE WAROS'}, {title: 'W To'}, {title: '痛い子ちゃん(LIVE ver.)', romaji: 'Itai Chan (LIVE ver.)'}, {title: 'ROCKSTARの恋', romaji: 'ROCKSTAR no Koi'}],
            albumArt: 'gokiburi/images/discog/g.jpg'
        };
        $scope.albums['second'] = {
            name: '黒い彗星 2ND IMPACT',
            romaji: 'Kuroi Suisei 2ND IMPACT',
            type: 'Mini-album',
            date: '09/03/2014',
            tracks: [{title: 'World End'}, {title: '輪廻転生', romaji: 'Rinne Tenshou'}, {title:'性獣～A GOD OF SEX～', romaji:'Sei-Jyuu~A GOD OF SEX~'}, {title:'ENDLESS LINE'},
            {title:'蜜カノLOVER', romaji: 'Mitsu KA NO LOVER'}, {title: 'ROCKSTARの恋', romaji: 'ROCKSTAR no Koi'}],
            albumArt: 'gokiburi/images/discog/2nd.jpg'
        };
        $scope.albums['itai'] = {
            name: '「痛ヒ。」',
            romaji: '「Itai。」',
            type: 'Single',
            date: '01/29/2014',
            price: '¥1,575',
            albumArt: 'gokiburi/images/discog/itai.jpg'
        };
        $scope.albums['tsurai'] = {
            name: '「痛ヒ。」',
            romaji: '「Tsurai。」',
            type: 'Single',
            date: '02/24/2014',
            price: '¥1,575',
            albumArt: 'gokiburi/images/discog/tsurai.jpg'
        };
        $scope.albums['kurushii'] = {
            name: '「苦シヒ。」',
            romaji: '「Kurushii。」',
            type: 'Single',
            date: '03/26/2014',
            price: '¥1,575',
            albumArt: 'gokiburi/images/discog/kurushii.jpg'
        };
	});
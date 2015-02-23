angular.module('iTruthLie.angular.solo')
	.controller('SoloController', function($scope, $location){

		$scope.albums = [];
        $scope.albums['akunari'] = {
            name: '悪なりの愛',
            romaji: 'Akunari no Ai',
            type: 'Single',
            date: '01/31/2005',
            tracks: [{title: '光', romaji: 'Hikari'}, {title:'Kill My Love'}, {title:'Capreicious'}, {title: '愛ガ見エナイ', romaji:'Ai GA MiENAI'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['5years'] = {
            name: '5years trace for・・・',
            type: 'Album',
            date: '06/05/2005',
            tracks: [{title: '5 years trace for...'}, {title:'出愛隊', romaji:'Deai-Tai'}, {title: '-光-', romaji:'-Hikari-'}, {title: '雪の傷痕', romaji: 'Yuki no Kizuato'},
            {title:'愛ガ見エナイ', romaji: 'Ai GA MiENAI'}, {title: 'ホモダチの輪', romaji: 'HOMODACHI no Wa'}, {title: 'セフレ。', romaji: 'SEFURE。'}, {title: '覚醒剤のすすめ', romaji:'Kakuseizai no Susume'},
            {title:'DQNなエセ麺カノ', romaji:'DQNna ESE MenKANO'}, {title: '紫葬', romaji: 'Murasaki So'}, {title:'ヒルドラ', romaji:'HIRUDORA'}, {title:'残骸残想残酷な貴方へ', romaji:'Zangai zansō zankokuna anata e'},
            {title: '5 years Trace End...'}],
            albumArt: 'solo/images/discog/5years.png'
        };
        $scope.albums['dazzling'] = {
            name: 'Dazzling Despair',
            type: 'Single',
            date: '09/06/2005',
            tracks: [{title: 'W to'}, {title:'紫葬', romaji: 'Murasaki So'}],
            albumArt: 'solo/images/discog/dazzling.jpg',
            price: 'Free'
        };
        $scope.albums['death'] = {
            name: '転校生ハ死神death',
            romaji: 'Tenkousei HA Shinigami death',
            type: 'Mini-album',
            date: '11/02/2005',
            tracks: [{title: 'Purple Lip'}, {title:'Love Waros'}, {title: '君ノ為', romaji:'Kimi NO Tame'}, {title:'カツアゲ', romaji: 'KATSUAGE'}, {title: 'Mk5'}, {title:'My Pride'},
            {title: '紫葬', romaji:'Murasaki So'}],
            albumArt: 'solo/images/discog/death.jpg'
        };
        $scope.albums['blackjack'] = {
            name: 'BLACK JACKト死神show',
            romaji: 'BLACK JACK TO Shinigami show',
            type: 'Mini-album',
            date: '12/07/2005',
            tracks: [{title: 'After All'}, {title:'肉便器', romaji:'Niku Benki'}, {title: 'D・C・L'}, {title:'-光-', romaji: '-Hikari-'}, {title: 'R-R&R'}, {title:'W to'},
            {title: 'Marriage'}],
            albumArt: 'solo/images/discog/blackjack.jpg'
        };
	});
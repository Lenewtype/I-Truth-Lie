angular.module('iTruthLie.angular.chateauLaTour')
	.controller('ChateauLaTourController', function($scope){
        $scope.albums = [];
        $scope.albums['metempsychosis'] = {
            name: 'Metem Psychosis',
            type: 'Album',
            date: '11/27/2000',
            price: '¥3,150',
            tracks: [{title: 'Metem Psychosis'}, {title:'Smile (Album Ver.)'}, {title:'残骸、残想、残酷な貴方へ...', romaji: 'Zangai, Zanzou, Zankokuna Anata e...'},
            {title: '葬列', romaji: 'Souretsu'}, {title: 'Solitude'}, {title: 'Smile (Single vers.)'}, {title: 'I Wish'}, {title: 'I Truth Lie'}, {title: '奇形ノ君へ', romaji: 'Kikei no Kimi e'},
            {title: 'Schizopherenia'},{title: 'Tragedy'}, {title: 'Primary'}, {title: 'Reverse'}],
            albumArt: 'metem.jpg'
        };
        $scope.albums['souretsu'] = {
            name: '「葬列..」',
            type: 'Single',
            romaji: '「Souretsu..」',
            date: '09/04/2000',
            price: '¥1,560',
            tracks: [{title: '「葬列..」', romaji: 'Souretsu'}, {title: '奇形の君へ', romaji: 'Kikei no Kimi e'},
            {title: 'Tragedy'}, {title: '未完の終幕', romaji: 'Mikan no Shuumaku'}],
            albumArt: 'Souretsu.jpg'
        };
        $scope.albums['bousou'] = {
            name: '「亡想..」',
            type: 'Single',
            romaji: '「Bousou..」',
            price: '¥1,050',
            date: '08/07/2000',
            tracks: [{title: '「序章」', romaji: 'Joshou'}, {title: 'PRIMARY'}, {title: 'UNTITLED'}],
            albumArt: 'bousou.jpg'
        };
        $scope.albums['metsubou'] = {
            name: '「滅亡..」',
            type: 'Single',
            romaji: '「Metsubou..」',
            price: '¥1,260',
            date: '07/04/2000',
            tracks: [{title: '「滅亡..」', romaji: 'Metsubou'}, {title: 'I truth lie'},
            {title: 'Smile'}],
            albumArt: 'metsubou.jpg'
        };
        $scope.albums['invasion'] = {
            name: 'Future Invasion Dream I',
            type: 'Omnibus',
            price: '¥1,260',
            date: '12/21/2000',
            tracks: [{title: '雪の傷痕･･', romaji: 'Yuki no Kizuato･･'}],
            albumArt: 'invasion.jpg'
        };
	});
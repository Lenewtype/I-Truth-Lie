angular.module('iTruthLie.angular.chateauLaTour')
	.controller('ChateauLaTourController', function($scope){
        $scope.albums = [];
        $scope.albums['metempsychosis'] = {
            name: 'Metem Psychosis',
            tracks: [{title: 'Metem Psychosis'}, {title:'Smile (Album Ver.)'}, {title:'残骸、残想、残酷な貴方へ...', romaji: 'Zangai, Zanzou, Zankokuna Anata e...'},
            {title: '葬列', romaji: 'Souretsu'}, {title: 'Solitude'}, {title: 'Smile (Single vers.)'}, {title: 'I Wish'}, {title: 'I Truth Lie'}, {title: '奇形ノ君へ', romaji: 'Kikei no Kimi e'},
            {title: 'Schizopherenia'},{title: 'Tragedy'}, {title: 'Primary'}, {title: 'Reverse'}],
            albumArt: 'metem.png'
        };
	});
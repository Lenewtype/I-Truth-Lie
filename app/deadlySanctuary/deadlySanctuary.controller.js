angular.module('iTruthLie.angular.deadlySanctuary')
	.controller('DeadlySanctuaryController', function($scope){
		$scope.albums = [];
        $scope.albums['homesick'] = {
            name: 'ホームシックチャイルド',
            romaji: 'HOMESICK CHILD',
            type: 'Demotape',
            date: '06/21/2001',
            price: '¥1,200',
            tracks: [{title: 'IMITATION BLOOD～SE～'}, {title:'ホームシックチャイルド', romaji:'HOMESICK CHILD'}, {title:'BLACK LIST007'}],
            albumArt: 'deadlySanctuary/images/discog/homesick.jpg'
        };
        $scope.albums['civet'] = {
            name: '麝香猫 ～ジャコウネコ～',
            romaji: 'JAKOUNEKO',
            type: 'Demotape',
            date: '07/21/2001',
            price: '¥1,200',
            tracks: [{title: 'PIG BOX'}, {title:'麝香猫 ～ジャコウネコ～', romaji:'JAKOUNEKO'}, {title:'MASTURBATION'}],
            albumArt: 'deadlySanctuary/images/discog/jakou.jpg'
        };
        $scope.albums['kijin'] = {
            name: '禁じられた遊び',
            romaji: 'Kinjirareta Asobi',
            type: 'Album',
            date: '02/09/2002',
            tracks: [{title: ' 	SE～弥生優雅行進曲～', romaji: 'SE~Yayoi Yuuga Koushinkyoku'}, {title:'禁じられた遊び', romaji:'Kinjirareta Asobi'}, {title:'BLACK LIST007'}, {title: '悩殺', romaji: 'Nousatsu'},
            {title: 'ノータリン', romaji: 'NOTARIN'}, {title: 'テロリスト', romaji: 'TERRORIST'}, {title: 'ホームシックチャイルド', romaji: 'HOMESICK CHILD'}, {title: 'オウム真○ROCK', romaji: 'OUMU Ma ○ ROCK'},
            {title: 'チャンネル妄想', romaji:'CHANNEL Mousou'}, {title: '君を亡くした冬', romaji: 'Kimi wo Nakushita Fuyu'}],
            albumArt: 'deadlySanctuary/images/discog/kinji.jpg'
        };
        $scope.albums['inseparable'] = {
            name: 'Inseparable Relation',
            type: 'Mini-album',
            date: '09/06/2003',
            tracks: [{title: 'inseparable relation'}, {title:'Suck my dick!!'}, {title:'ナイトエンジェル', romaji: 'NIGHT ANGEL'}, {title: 'Deadly Circus'},
            {title: 'SAD SONGS…'}],
            albumArt: 'deadlySanctuary/images/discog/inseparable.jpg'
        };
        $scope.albums['imperial'] = {
            name: 'Imperial',
            type: 'Omnibus',
            date: '06/02/2004',
            tracks: [{title: '東京事件爆弾', romaji: 'Tokyo Jiken Bakudan'}, {title:'12月23日のキミへ…', romaji: 'Jyuuni gatsu Nijyuu nichi no KIMI e...'}],
            albumArt: 'deadlySanctuary/images/discog/imperial.jpg'
        };
        $scope.albums['public'] = {
            name: 'PUBLIC EGO DANCE 001',
            type: 'Omnibus',
            date: '08/01/2003',
            tracks: [{title: '奴の唄', romaji: 'Yatsu no Uta'}],
            albumArt: 'deadlySanctuary/images/discog/public.png'
        };
        $scope.albums['emperor'] = {
            name: 'Emperor',
            type: 'Omnibus',
            date: '11/11/2004',
            tracks: [{title: 'スペルマ', romaji: 'SPERM (∀nti Feminism)'}, {title: ' 淫～Masturbation～', romaji: 'in~Masturbation (Deadly Sanctuary)'}, {title:'僕の描く世界は完璧', romaji: 'Boku no Kaku Seikai ha Kanpeki (∀nti Feminism)'},
            {title:'Happiness', romaji: 'Deadly Sanctuary'}, {title:'殺そうよ!', romaji: 'Korosouyo! (∀nti Feminism)'}, {title: '闇～Black List～ ', romaji: 'Yami~Black List~ (Deadly Sanctuary)'}, {title:'Emperor', romaji: '(∀nti Feminism + Deadly Sanctuary)'}],
            albumArt: 'deadlySanctuary/images/discog/emperor.jpg'
        };
        $scope.albums['kaleidoscope'] = {
            name: 'Kaleidoscope',
            type: 'Omnibus',
            date: '06/01/2003',
            tracks: [{title: ' ホームシックチャイルド～拝啓　オカマ野郎へ～', romaji: 'HOMESICK CHILD~Haikei Okama Yarou e'}, {title: '君を亡くした冬', romaji: 'Kimi wo Nakushita Fuyu'}],
            albumArt: 'karMaria/images/discog/kaleidoscope.png'
        };
	});
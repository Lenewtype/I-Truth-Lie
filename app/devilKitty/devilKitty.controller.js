angular.module('iTruthLie.angular.devilKitty')
	.controller('DevilKittyController', function($scope){
        $scope.albums = [];
        $scope.albums['cobra'] = {
            name: '-COBRA-',
            type: 'Single',
            date: '04/28/2004',
            price: '¥2,100',
            tracks: [{title: 'COBRA'}, {title:'セフレ', romaji:'SEFURE'}, {title:'元彼。', romaji: 'Motokare。'}, {title: 'ドライブ', romaji: 'DRIVE'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['fukoujiman'] = {
            name: '-不幸自慢-',
            romaji: '-Fukou Jiman-',
            type: 'Single',
            date: '05/26/2004',
            price: '¥2,100',
            tracks: [{title: 'THE Harassing'}, {title:'Karma'}, {title:'神様、もう一度だけ', romaji: 'Kami-sama, Mou ichido dake'}, {title: '時を越えて…', romaji: 'Toki o Koete...'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['ware'] = {
            name: '-我、悪魔故-',
            romaji: '-Ware, Akumako-',
            type: 'Single',
            date: '06/30/2004',
            price: '¥2,100',
            tracks: [{title: 'Ghost Dance'}, {title:'Devil a Wish'}, {title:'Death Penalty'}, {title: 'Best Summer'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['akuma'] = {
            name: '-悪魔降臨-',
            romaji: '-Akuma Kourin-',
            type: 'Album',
            date: '08/11/2004',
            price: '',
            tracks: [{title: '悪魔降臨', romaji: 'Akumako'}, {title:'ROCK STARの恋', romaji: 'ROCK STAR no Koi'}, {title:'サクラ', romaji: 'SAKURA'}, {title: '職業ファック', romaji: 'Shokugyou FUCK'},
            {title: 'セフレ', romaji:'SEFURE'}, {title: '神様、もう一度だけ', romaji: 'Kami-sama, Mou Ichido dake'}, {title:'悪魔発狂', romaji: 'Akuma Hakkyou'}, {title:'世紀末覇者', romaji: 'Seikimatsu Hasha'},
            {title: 'Karma'}, {title:'血の契約', romaji: 'Chi no Keiyaku'}, {title: 'Best Summer'}, {title: 'Special Thanks'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['yougenkyo'] = {
            name: '妖幻鏡III',
            romaji:'Yougenkyou III',
            type: 'Omnibus',
            price: '',
            date: '07/23/2003',
            tracks:[{title: '出愛隊', romaji: 'Deai-Tai'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['kiai'] = {
            name: '鬼愛',
            romaji: 'Kiai',
            type: 'Mini-album',
            date: '05/05/2003',
            price: '¥2,100',
            tracks: [{title: '鬼愛', romaji: 'Kiai'}, {title:'出愛隊', romaji: 'Deai-Tai'}, {title:'カツアゲ', romaji: 'KATSUAGE'}, {title: '秋葉原ポシェット軍団', romaji: 'Akihabara POCHETTE Gundan'},
            {title: 'Maria'}, {title: 'ホモダチの輪', romaji: 'HOMODACHI no Wa'}, {title: 'ボーナストラック', romaji: 'BONUS TRACK'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['akumaoni'] = {
            name: '悪魔鬼茶',
            romaji: 'Akuma Oni Cha',
            type: 'Album',
            date: '12/23/2002',
            price: '¥2,100',
            tracks: [{title: '猫舌', romaji: 'Neko Jita'}, {title:'Hello Katty'}, {title:'覚醒剤のすすめ', romaji: 'Kakuseizai no Susume'}, {title: 'ドライブ', romaji: 'DRIVE'},
            {title: '死体とデート', romaji: 'Shitai to DATE'}, {title: '愛のパワー２００２', romaji: 'Ai no POWER 2002'}, {title: 'ヒルドラ', romaji: 'HIRUDORA'},
            {title: 'アンチお洒落系', romaji: 'ANTI-Oshare-kei'}, {title: '初恋', romaji: 'Hatsukoi'}, {title: '奇形の２ちゃんネラー', romaji: 'Kikei no 2-chan NERAA'},
            {title: 'バンザイお洒落系', romaji: 'BANZAI Oshare-kei'}, {title: '束縛', romaji: 'Sokubaku'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['rockstar'] = {
            name: 'エセイカレ☆ROCK STAR',
            romaji: 'ESEIKARE ☆ ROCK STAR ',
            type: 'Single',
            date: '10/29/2003',
            price: '¥2,100',
            tracks: [{title: 'DQNなエセ麺カノ', romaji: 'DQN-na ESE Men KANO'}, {title:'万歳イカレ系', romaji: 'Banzai IKARE-kei'}, {title:'ROCK STARの恋', romaji: 'ROCK STAR no Koi'},
            {title: 'Hello Katty'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['untitled'] = {
            name: '[Untitled]',
            type: 'Revival Live-distributed Single',
            date: '07/28/2009',
            tracks: [{title: '新性器オナンゲリヲン', romaji: 'Shinseiki ONANNGERIWAN'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['101'] = {
            name: '[Untitled]',
            type: 'Live-distributed Single',
            date: '10/01/2004',
            tracks: [{title: 'Untitled', romaji: '"HOMODACHI no Wa" hummed by 弑夕'}],
            albumArt: 'common/blank.png'
        };
        $scope.albums['102'] = {
            name: '[Untitled]',
            type: 'Live-distributed Single',
            date: '10/02/2004',
            tracks: [{title: 'Untitled', romaji: '"HOMODACHI no Wa" hummed by Yura(?)'}],
            albumArt: 'common/blank.png'
        };
});
    




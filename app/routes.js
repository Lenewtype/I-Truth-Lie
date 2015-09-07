angular.module('iTruthLie.angular').config(function($routeProvider) {
    'use strict';
    $routeProvider.when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController'
    }).when('/devilKitty', {
        templateUrl: 'devilKitty/devilKitty.html',
        controller: 'DevilKittyController'
    }).when('/gokiburi',{
        templateUrl: 'gokiburi/gokiburi.html',
        controller: 'GokiburiController'
    }).when('/chateauLaTour',{
        templateUrl: 'chateauLaTour/chateauLaTour.html',
        controller: 'ChateauLaTourController'
    }).when('/karMaria',{
        templateUrl: 'karMaria/karmaria.html',
        controller: 'KarMariaController'
    }).when('/deadlySanctuary',{
        templateUrl: 'deadlySanctuary/deadlySanctuary.html',
        controller: 'DeadlySanctuaryController'
    }).when('/kiga',{
        templateUrl: 'kiga/kiga.html',
        controller: 'KigaController'
    }).when('/solo',{
        templateUrl: 'solo/solo.html',
        controller: 'SoloController'
    }).when('/early',{
        templateUrl: 'early/early.html',
        controller: 'EarlyController'
    }).when('/about',{
        templateUrl: 'about/about.html',
        controller: 'AboutController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
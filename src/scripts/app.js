angular.module('psRating', ['ngRoute'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            });
    }]);
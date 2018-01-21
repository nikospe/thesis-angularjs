angular.module('psRating')
    .controller('HomeCtrl', ['$scope', HomeCtrl]);

    function HomeCtrl ($scope) {
        $scope.message= 'Awesome';
    }
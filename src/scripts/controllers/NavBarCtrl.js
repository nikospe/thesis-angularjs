angular.module('psRating')
    .controller('NavBarCtrl', ['$scope', NavBarCtrl]);

    function NavBarCtrl ($scope) {
        $scope.ifSignedIn = false;
        $scope.ifSignedOut = true;
    }
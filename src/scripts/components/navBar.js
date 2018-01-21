angular.module('psRating')
    .directive('navBar', navbar);

    function navbar() {
        return {
          restrict: 'E',
          templateUrl: 'components/navBar.html',
          controller: 'NavBarCtrl'
        }
    }
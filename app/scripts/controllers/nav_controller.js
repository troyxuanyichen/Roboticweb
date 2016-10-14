'use strict';

angular.module('brainCoWebApp')
  .controller('NavCtrl', navCtrl);

navCtrl.$inject = [
  '$rootScope',
  '$scope',
  '$http',
  '$location',
  '$anchorScroll'
];

function navCtrl($rootScope, $scope, $http, $location, $anchorScroll) {
  $scope.goToSection = function(secName) {
    $location.hash(secName);

    $anchorScroll();
    $location.url(secName);
    $rootScope.$broadcast('goToSection', secName);
  }

  $scope.goToPledge = function() {
    $location.hash('pledge');
    $location.url('pledge');
    $rootScope.$broadcast('goToPledge');
  }


}

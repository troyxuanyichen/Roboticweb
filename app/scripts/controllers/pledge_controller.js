'use strict';

/**
 * @ngdoc function
 * @name brainCoWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the brainCoWebApp
 */
angular.module('brainCoWebApp')
  .controller('PledgeCtrl', pledgeCtrl);

pledgeCtrl.$inject = [
  '$scope',
  '$http',
  '$location'
];

function pledgeCtrl($scope, $http, $location) {

  $scope.userInfo = {};

  $scope.msgInfo = {};

  $scope.pledge = false;

  $scope.userInfoErrMsg = '';

  $scope.msgInfoErrMsg = '';

  $scope.submitUserInfo = function() {
    if($scope.pledge) {
      submitPledgeInfo();
    } else {
      submitSubscribeInfo();
    }
  };

  $scope.pledgePageSubmit = submitPledgeInfo;

  function submitPledgeInfo() {

    var config = {
      headers: {
        'Content-Type': 'application/json'
      },
    };

    $http.post('https://website.brainco.tech:8081/pledgeuserinfo', $scope.userInfo, config).then(function success(res) {
      $scope.submitted = false;
      alert('Your pledge infomation is submitted successfully! Thank you!');
      $('#subscribePledgeModal').foundation('close');

    }, function error(err) {
      console.log(err);
      if(err.data) {
        $scope.userInfoErrMsg = err.data.message;
      } else {
        $scope.userInfoErrMsg = 'There are some problems with the pledge server, please try again later or contact us.'
      }
    });


  }

  function submitSubscribeInfo() {
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    $http.post( 'https://website.brainco.tech:8081/subscribeusers', $scope.userInfo, config).then(function success(res) {
      $scope.submitted = false;
      alert('Your subscribe infomation is submitted successfully! Thank you!');
      $('#subscribePledgeModal').foundation('close');

    }, function error(err) {
      if(err.data !== null) {
        $scope.userInfoErrMsg = err.data.message;
      } else {
        $scope.userInfoErrMsg = "There are some problems with the subscribe server. Please try again later or "
         + "contact us.";
      }
    });

  }

  $scope.reset = function() {
    $scope.userInfo = {};
    $scope.userInfoErrMsg = '';
  };

  $scope.goHome = function() {
    $location.hash('home');
  }
}

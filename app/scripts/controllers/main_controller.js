'use strict';

/**
 * @ngdoc function
 * @name brainCoWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brainCoWebApp
 */
angular.module('brainCoWebApp')
  .controller('MainCtrl', mainCtrl);

mainCtrl.$inject = [
    '$scope',
    '$rootScope',
    '$http',
    '$location'
];

function mainCtrl($scope, $rootScope, $http, $location) {
  $scope.pageUrl = $location.url();
  $scope.$watch('pageUrl', function(newValue, oldValue) {
    $scope.pageUrl = newValue;
  });

  $scope.$on('goToPledge', function() {
    $scope.pageUrl = '/pledge';
  });

  $scope.$on('goToFocusone', function() {
    $scope.pageUrl = '/focusone';
  });

  $scope.$on('goToSection', function(args) {
    $scope.pageUrl = '/' + args;
  });

  initParallax();

  $scope.msgInfo = {};
  $scope.submitted = false;
  $scope.msgInfoErrMsg = '';

  $scope.resetMsg = function() {
    $scope.msgInfo = {};
    $scope.submitted = false;
    $scope.msgInfoErrMsg = '';
    $scope.submitted=false;
  };

  $scope.submitMessage = function() {

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    $http.post('https://website.brainco.tech:8081/usermessage', $scope.msgInfo, config).then(function success(res) {
      alert('Your message is successfully submitted. We will reply you within 2 business days');
      $scope.msgInfo = {};
      $scope.submitted = false;
    }, function error(err) {
      if(err.data) {
        $scope.msgInfoErrMsg = err.data.message;
      } else {
        $scope.msgInfoErrMsg = 'There is something wrong with the message server, please try again later or contact us.'
      }
    });



  };
  $scope.goToFocusone = function(section) {
    console.log('In the main_controller.js======== and goToFocusone');
    $location.hash('focusone');
    $location.url('focusone');
    $rootScope.$broadcast('goToFocusone');
  };

  function initParallax() {
    var l=new ScrollMagic.Controller,i=["#mission", "#companyreview", "#team", "#contact", "#career","#media"];
    if(!Modernizr.touch){
      i.forEach(function(e,i){
        {
          var r=i+1;new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle(e,"is-active").addTo(l)
        }
      });
      {
        new ScrollMagic.Scene({triggerElement:".slide.is-light"}).setClassToggle("nav","is-dark").addTo(l)
      }
    }
  }

}

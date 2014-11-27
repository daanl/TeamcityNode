'use strict';

/**
 * @ngdoc function
 * @name teamcityNodeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the teamcityNodeApp
 */
angular.module('teamcityNodeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

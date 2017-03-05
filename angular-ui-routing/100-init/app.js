(function(angular) {
  'use strict';
  var app = angular.module('app', ['ui.router']);
  app.config(config);
  // routing
  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }
    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>It\'s about the UI-Router!</h3>'
    }
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  };
})(angular);

(function(angular) {
    'use strict';

    angular.module('app').component('about', {
        templateUrl: 'components/about.html'
    });

    // routing
    angular.module('app').config(config);
    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        var aboutState = {
            name: 'about',
            url: '/about',
            component: 'about'
        };
        $stateProvider.state(aboutState);
    }

})(angular);

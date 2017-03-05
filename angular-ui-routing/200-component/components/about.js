(function(angular) {
    'use strict';

    angular.module('app').component('about', {
        template: '<h3>It\'s about the UI-Router!</h3>'
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

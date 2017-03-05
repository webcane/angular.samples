(function(angular) {
    'use strict';

    angular.module('app').component('hello', {
        templateUrl: 'components/hello.html', 
        controller: function() {
            this.greeting = 'hello';

            this.toggleGreeting = function() {
                this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
            };
        }
    });

    // routing
    angular.module('app').config(config);
    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/hello',
            component: 'hello'
        };
        $stateProvider.state(helloState);
    }

})(angular);

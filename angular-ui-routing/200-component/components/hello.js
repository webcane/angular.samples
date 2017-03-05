(function(angular) {
    'use strict';

    angular.module('app').component('hello', {
        template: '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
            '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

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

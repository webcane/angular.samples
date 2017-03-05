(function(angular) {
    'use strict';

    angular.module('app').component('people', {
        bindings: {
            people: '<'
        },
        templateUrl: 'components/people.html'
    });

    // routing
    angular.module('app').config(config);
    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        var peopleState = {
            name: 'people',
            url: '/people',
            component: 'people',
            resolve: {
                people: function(PeopleService) {
                    return PeopleService.getAllPeople();
                }
            }
        };
        $stateProvider.state(peopleState);
    }

})(angular);

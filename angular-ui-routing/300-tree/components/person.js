(function(angular) {
    'use strict';

    angular.module('app').component('person', {
        bindings: {
            person: '<'
        },
        templateUrl: 'components/person.html'
    });

    // routing
    angular.module('app').config(config);
    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        var personState = {
            name: 'people.person',
            url: '/{personId}',
            component: 'person',
            resolve: {
                person: function(people, $stateParams) {
                    return people.find(function(person) { 
                        return person.id === $stateParams.personId;
                    });
                }
            }
        };
        $stateProvider.state(personState);
    }

})(angular);

(function(angular) {
    'use strict';

    angular.module('app').component('people', {
        bindings: {
            people: '<'
        },

        template: '<h3 ng-show="$ctrl.people.length">Some people:</h3>' +
            '<h3 ng-hide="$ctrl.people.length">no people</h3>' +
            '<ul>' +
            '  <li ng-repeat="person in $ctrl.people">' +
            '    <a ui-sref="person({ personId: person.id })">' +
            '      {{person.name}}' +
            '    </a>' +
            '  </li>' +
            '</ul>'
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

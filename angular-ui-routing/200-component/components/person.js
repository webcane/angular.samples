(function(angular) {
    'use strict';

    angular.module('app').component('person', {
        bindings: {
            person: '<'
        },
        template: '<h3>A person!</h3>' +

            '<div>Name: {{$ctrl.person.name}}</div>' +
            '<div>Id: {{$ctrl.person.id}}</div>' +
            '<div>Company: {{$ctrl.person.company}}</div>' +
            '<div>Email: {{$ctrl.person.email}}</div>' +
            '<div>Address: {{$ctrl.person.address}}</div>' +

            '<button ui-sref="people">Close</button>'
    });

    // routing
    angular.module('app').config(config);
    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        var personState = {
            name: 'person',
            url: '/people/{personId}',
            component: 'person',
            // This state defines a 'person' resolve
            // It delegates to the PeopleService, passing the personId parameter
            resolve: {
                person: function(PeopleService, $transition$) {
                    return PeopleService.getPerson($transition$.params().personId);
                }
            }
        };
        $stateProvider.state(personState);
    }

})(angular);

(function(angular) {
    'use strict';

    // service
    angular.module('app').service('PeopleService', function($http) {
        var service = {
            getAllPeople: function() {
                return $http.get('data/people.json', {
                    cache: true
                }).then(function(resp) {
                    return resp.data;
                }).catch(function(resp) {
                  return [];
                });
            },

            getPerson: function(id) {
                function personMatchesParam(person) {
                    return person.id === id;
                }

                return service.getAllPeople().then(function(people) {
                    return people.find(personMatchesParam);
                });
            }
        };
        return service;
    });

})(angular);

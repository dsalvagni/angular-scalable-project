define(function () {
    'use strict';
    contactsSvc.$inject = ['$http', '$q'];
    /*@ngInject*/
    function contactsSvc($http, $q) {

        var service = {
            getAllContacts: getAllContacts
        };

        return service;


        function getAllContacts() {
            var future = $q.defer();
            $http.get('./src/modules/contactList/data/contacts.json')
                .then(function (response) {
                    future.resolve({
                        items: response.data
                    });
                }).catch(function (data, status) {
                    future.reject({
                        data: data,
                        status: status
                    });
                });
            return future.promise;
        }
    }

    return contactsSvc;
});
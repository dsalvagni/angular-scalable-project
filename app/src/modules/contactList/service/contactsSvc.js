define([], function () {
    'use strict';
    /*@ngInject*/
    var contactsSvc = function ($http, $q) {
        /**
         * Private methods
         */
        var _getAllContacts = function () {
            var future = $q.defer();
            $http.get('./src/modules/contactList/data/contacts.json').success(function (data) {
                future.resolve({
                    items: data
                });
            }).error(function (data, status) {
                future.reject({
                    data: data,
                    status: status
                });
            });
            return future.promise;
        };

        /**
         * Public methods
         */
        return {
            getAllContacts: function () {
                return _getAllContacts();
            }
        }
    };

    contactsSvc.$inject = ['$http', '$q'];
    return contactsSvc;
});
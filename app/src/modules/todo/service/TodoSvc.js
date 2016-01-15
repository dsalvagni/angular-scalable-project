define(function () {
    'use strict';
    todoSvc.$inject = ['$http', '$q'];
    /*@ngInject*/
    function todoSvc($http, $q) {

        var service = {
            getAllTasks: getAllTasks,
            getAllUndone: getAllUndone
        };

        return service;

        function getAllTasks() {
            var future = $q.defer();
            $http.get('./src/modules/todo/data/tasks.json')
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

        function getAllUndone() {
            var future = $q.defer();
            var items = [];
            getAllTasks().then(function (data) {
                items = data.items.filter(function (item) {
                    return !item.done;
                });
                future.resolve(items);
            }).catch(function (data) {
                future.reject(data);
            });
            return future.promise;

        }
    }

    return todoSvc;
});
define([], function () {
    'use strict';
    /*@ngInject*/
    var todoSvc = function ($http, $q) {
        /**
         * Private methods
         */
        var _getAllTasks = function () {
            var future = $q.defer();
            $http.get('./src/modules/todo/data/tasks.json').success(function (data) {
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

        var _getAllUndone = function () {
            var future = $q.defer();
            var items = [];
            _getAllTasks().then(function (data) {
                items = data.items.filter(function (item) {
                    return !item.done;
                });
                future.resolve(items);
            }).catch(function (data) {
                future.reject(data);
            });
            return future.promise;

        };

        /**
         * Public methods
         */
        return {
            getAllTasks: function () {
                return _getAllTasks();
            },
            getAllUndone: function () {
                return _getAllUndone();
            }
        }
    };

    todoSvc.$inject = ['$http', '$q'];
    return todoSvc;
});
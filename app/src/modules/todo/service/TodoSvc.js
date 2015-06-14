define([], function () {
    'use strict';
    var todoSvc = function ($http, $q) {
        this.getAllTasks = function () {
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
        }
    };

    todoSvc.$inject = ['$http', '$q'];
    return todoSvc;
});
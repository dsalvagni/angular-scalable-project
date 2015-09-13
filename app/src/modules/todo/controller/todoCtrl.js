define([], function () {
    'use strict';
    /*@ngInject*/
    var todo = function ($rootScope, $scope, TodoSvc) {
        $scope.items = [];
        function getAllTasks() {
            TodoSvc.getAllTasks().then(function (data) {
                $scope.items = data.items;
            });
        }

        $scope.add = function (item, $event) {
            if ($event.keyCode !== 13) return false;
            $scope.items.push({description: item.description, done: false});
            $scope.item = {};
        };

        $scope.getSelectedTasks = function () {
            return $scope.items.filter(function (item) {
                return item.done;
            });
        };
        $scope.deleteSelected = function (items) {
            if (!confirm('Are you sure?')) return false;
            $scope.items = items.filter(function (item) {
                return !item.done;
            });
        };
        getAllTasks();

    };
    todo.$inject = ['$rootScope', '$scope', 'todoSvc'];
    return todo;
});

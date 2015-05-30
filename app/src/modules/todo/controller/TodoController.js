(function () {
    'use strict';
    define([], function () {
        var TodoController = function ($rootScope, $scope, TodoService) {
            $scope.items = [];
            function getAllTasks() {
                TodoService.getAllTasks().then(function (data) {
                    $scope.items = data.items;
                });
            }

            $scope.add = function (item, $event) {
                if ($event.keyCode !== 13) return false;
                $scope.items.push({description: item.description, done: false, selected: false});
                $scope.item = {};
            };

            $scope.getSelectedTasks = function () {
                return $scope.items.filter(function (item) {
                    return item.selected;
                });
            };
            $scope.deleteSelected = function (items) {
                if (!confirm('Are you sure?')) return false;
                $scope.items = items.filter(function (item) {
                    return !item.selected;
                });
            };
            getAllTasks();

        };
        TodoController.$inject = ['$rootScope', '$scope', 'TodoService'];
        return TodoController;
    });
})();
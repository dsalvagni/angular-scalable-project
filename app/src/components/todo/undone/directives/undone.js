define([], function () {
    "use strict";
    var undone = function () {
        var partialPath = "src/components/todo/undone/view/";
        return {
            restrict: 'E',
            templateUrl: partialPath + '_undone.html',
            /*@ngInject*/
            controller: ['$scope', 'todoSvc', function ($scope, todoSvc) {
                var items = [];
                $scope.isReady = false;
                $scope.done = function (item) {
                    item.done = true;
                };
                $scope.getItems = function () {
                    items = items.filter(function (item) {
                        return !item.done;
                    });
                    return items;
                };
                $scope.add = function (item, $event) {
                    if ($event.keyCode !== 13) return false;
                    items.push(item);
                    $scope.item = {};
                };
                todoSvc.getAllUndone().then(function (data) {
                    items = data;
                    $scope.isReady = true;
                }).catch(function () {
                    $scope.isReady = true;
                });
            }]
        }
    };
    return undone;
});
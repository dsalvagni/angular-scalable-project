define([], function () {
    'use strict';
    var moduleConfig = function ($stateProvider) {
        var partialPath = "src/modules/todo/view/";
        $stateProvider
            .state('todo', {
                url: "/todo",
                controller: 'todoCtrl',
                templateUrl: partialPath + "todo/index.html"
            });
    };

    moduleConfig.$inject = ['$stateProvider'];
    return moduleConfig;
});
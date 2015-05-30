(function () {
    'use strict';
    define([], function () {
        var ModuleConfig = function ($stateProvider) {
            var partialPath = "src/modules/todo/view/";
            $stateProvider
                .state('todo', {
                    url: "/todo",
                    controller: 'module/todo/TodoController',
                    templateUrl: partialPath + "todo/index.html"
                });
        };

        ModuleConfig.$inject = ['$stateProvider'];
        return ModuleConfig;
    });
})();
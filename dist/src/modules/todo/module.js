(function () {
    'use strict';
    define([
        '../../config/namespace',
        './controller/TodoController',
        './service/TodoService',
        './config/module.config',
    ], function (namespace,
                 TodoController,
                 TodoService,
                 moduleConfig) {
        angular.module(namespace + '.todo', ['ui.router', namespace + '.navigation'])
            .controller('module/todo/TodoController', TodoController)
            .service('TodoService', TodoService)
            .config(moduleConfig)
            .run(['PrimaryNavigationProvider', function (PrimaryNavigationProvider) {
                PrimaryNavigationProvider.add(
                    {
                        title: "Todo",
                        stateName: "todo",
                        order: 1
                    }
                );
            }]);
    });
})();
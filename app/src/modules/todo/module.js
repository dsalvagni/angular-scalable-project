define([
    '../../config/namespace',
    './controller/todoCtrl',
    './service/todoSvc',
    './config/module.routes'
], function (namespace,
             todoCtrl,
             todoSvc,
             moduleRoutes) {
    'use strict';
    angular.module(namespace + '.todo', ['ui.router', namespace + '.navigation'])
        .controller('todoCtrl', todoCtrl)
        .service('todoSvc', todoSvc)
        .run(['PrimaryNavigation', 'RouterHelper', function (PrimaryNavigation, RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
            PrimaryNavigation.add(
                {
                    title: "Todo List",
                    stateName: "todo",
                    order: 1
                }
            );
        }]);
});

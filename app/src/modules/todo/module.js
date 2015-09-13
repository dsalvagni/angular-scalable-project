define([
    '../../config/namespace',
    './controller/todoCtrl',
    './service/todoSvc',
    './config/module.config',
], function (namespace,
             todoCtrl,
             todoSvc,
             moduleConfig) {
    'use strict';
    angular.module(namespace + '.todo', ['ui.router', namespace + '.navigation'])
        .controller('todoCtrl', todoCtrl)
        .service('todoSvc', todoSvc)
        .config(moduleConfig)
        .run(['PrimaryNavigation', function (PrimaryNavigation) {
            PrimaryNavigation.add(
                {
                    title: "Todo List",
                    stateName: "todo",
                    order: 1
                }
            );
        }]);
});

define([
    '../../config/namespace',
    './config/module.config'
], function (namespace,
             moduleConfig) {
    'use strict';
    angular.module(namespace + '.dashboard', ['ui.router', namespace + '.navigation'])
        .config(moduleConfig)
        .run(['PrimaryNavigation', function (PrimaryNavigation) {
            PrimaryNavigation.add(
                {
                    title: "Dashboard",
                    stateName: "dashboard",
                    order: 0
                }
            );
        }]);
});
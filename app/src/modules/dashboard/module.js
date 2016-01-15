define([
    '../../config/namespace',
    './config/module.routes'
], function (namespace,
             moduleRoutes) {
    'use strict';
    angular.module(namespace + '.dashboard', ['ui.router', namespace + '.navigation'])
        .run(['PrimaryNavigation','RouterHelper', function (PrimaryNavigation, RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
            PrimaryNavigation.add(
                {
                    title: "Dashboard",
                    stateName: "dashboard",
                    order: 0
                }
            );
        }]);
});
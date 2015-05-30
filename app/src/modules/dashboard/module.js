(function () {
    'use strict';
    define([
        '../../config/namespace',
        './config/module.config'
    ], function (namespace,
                 moduleConfig) {
        angular.module(namespace + '.dashboard', ['ui.router', namespace + '.navigation'])
            .config(moduleConfig)
            .run(['PrimaryNavigationProvider',function (PrimaryNavigationProvider) {
                PrimaryNavigationProvider.add(
                    {
                        title: "Dashboard",
                        stateName: "dashboard",
                        order: 0
                    }
                );
            }]);
    });
})();
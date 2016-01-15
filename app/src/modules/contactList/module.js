define([
    '../../config/namespace',
    './controller/contactsCtrl',
    './service/contactsSvc',
    './config/module.routes'
], function (namespace,
             contactsCtrl,
             contactsSvc,
             moduleRoutes) {
    'use strict';
    angular.module(namespace + '.contacts', ['ui.router', namespace + '.navigation'])
        .controller('contactsCtrl', contactsCtrl)
        .factory('contactsSvc', contactsSvc)
        .run(['PrimaryNavigation', 'RouterHelper', function (PrimaryNavigation, RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
            PrimaryNavigation.add(
                {
                    title: "Contacts",
                    stateName: "contacts",
                    order: 1
                }
            );
        }]);
});
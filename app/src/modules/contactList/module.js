define([
    '../../config/namespace',
    './controller/contactsCtrl',
    './service/contactsSvc',
    './config/module.config'
], function (namespace,
             contactsCtrl,
             contactsSvc,
             moduleConfig) {
    'use strict';
    angular.module(namespace + '.contacts', ['ui.router', namespace + '.navigation'])
        .controller('contactsCtrl', contactsCtrl)
        .service('contactsSvc', contactsSvc)
        .config(moduleConfig)
        .run(['PrimaryNavigation', function (PrimaryNavigation) {
            PrimaryNavigation.add(
                {
                    title: "Contacts",
                    stateName: "contacts",
                    order: 1
                }
            );
        }]);
});
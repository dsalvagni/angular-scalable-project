define([
    '../../config/namespace',
    './provider/PrimaryNavigationProvider',
    './config/module.config'
], function (namespace,
             primaryNavigationProvider,
             moduleConfig) {
    'use strict';
    angular.module(namespace + '.navigation', [])
        .provider('PrimaryNavigation', primaryNavigationProvider)
        .config(moduleConfig);
});
define([
    '../../config/namespace',
    './config/app.bootstrap',
    './config/app.config'
], function (
    namespace,
    appBootstrap,
    appConfig
) {
    'use strict';
    angular.module(namespace + '.core', ['ngRoute'])
        .config(appConfig)
        .run(appBootstrap);
});

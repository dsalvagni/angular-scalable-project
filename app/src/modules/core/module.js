define([
    '../../config/namespace',
    './config/app.bootstrap',
    './config/app.config',
    './provider/RouterHelperProvider'
], function (
    namespace,
    appBootstrap,
    appConfig,
    RouterHelperProvider
) {
    'use strict';
    angular.module(namespace + '.core', ['ngRoute'])
        .config(appConfig)
        .provider('RouterHelper',RouterHelperProvider)
        .run(appBootstrap);
});

define([
    '../../config/namespace',
    './controller/AppCtrl',
    './config/module.config'
], function (namespace,
             appCtrl,
             moduleConfig) {
    'use strict';
    angular.module(namespace + '.app', ['ngRoute', namespace + '.navigation'])
        .controller('appCtrl', appCtrl)
        .config(moduleConfig);
});

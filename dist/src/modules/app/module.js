(function(){
    'use strict';
    define([
        '../../config/namespace',
        './controller/AppController',
        './config/module.config'
    ],function(
        namespace,
        AppController,
        moduleConfig
    )
    {
        angular.module(namespace+'.app',['ngRoute',namespace+'.navigation'])
            .controller('module/app/AppController',AppController)
            .config(moduleConfig);
    });
})();
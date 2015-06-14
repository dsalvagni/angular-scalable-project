(function(){
    'use strict';
    define([
        '../../config/namespace',
        './provider/PrimaryNavigationProvider',
        './config/module.config'
    ],function(
        namespace,
        primaryNavigationProvider,
        moduleConfig
    )
    {
        angular.module(namespace+'.navigation',[])
            .provider('PrimaryNavigationProvider',primaryNavigationProvider)
            .config(moduleConfig);
    });
})();
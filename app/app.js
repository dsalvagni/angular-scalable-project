(function () {
    'use strict';
    define([
        'src/config/namespace'

        ,'src/modules/core/config/app.config'
        ,'src/modules/core/config/app.bootstrap'
        ,'src/modules/navigation/module'
        ,'src/modules/app/module'
        ,'src/modules/todo/module'
        ,'src/modules/dashboard/module'
    ], function (namespace
                 ,appConfig
                 ,appBootstrap
    ) {
        angular.module(namespace, [
            'ngRoute'
            ,'ui.router'

        /**
         * App modules
         */
            ,namespace + '.app'
            ,namespace + '.todo'
            ,namespace + '.dashboard'
        ])
        .config(appConfig)
        .run(appBootstrap);
        return {
            name: namespace
        };

    });
})
();
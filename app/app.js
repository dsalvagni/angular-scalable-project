(function () {
    'use strict';
    define([
    /**
     * References first
     */
        'src/config/namespace'
        , 'src/modules/core/config/app.config'
        , 'src/modules/core/config/app.bootstrap'
    /**
     * Then load all components...
     */
        , 'src/components/todo/undone/component'
        , 'src/components/contactList/phoneBook/component'
    /**
     * ...and modules.
     */
        , 'src/modules/navigation/module'
        , 'src/modules/app/module'
        , 'src/modules/todo/module'
        , 'src/modules/dashboard/module'
        , 'src/modules/contactList/module'

    ], function (namespace
        , appConfig
        , appBootstrap) {
        angular.module(namespace, [
            'ngRoute'
            , 'ui.router'

        /**
         * App modules
         */
            , namespace + '.app'
            , namespace + '.todo'
            , namespace + '.dashboard'
            , namespace + '.contacts'

        /**
         * App components
         */
            , namespace + '.components.todo.undone'
            , namespace + '.components.contacts.phoneBook'
        ])
            .config(appConfig)
            .run(appBootstrap);
        return {
            name: namespace
        };

    });
})
();
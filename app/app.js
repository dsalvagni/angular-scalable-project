define([
/**
 * References first
 */
    'src/config/namespace'
    , 'src/resources/views'
/**
 * Then load all components...
 */
    , 'src/components/todo/pending/component'
    , 'src/components/contactList/phoneBook/component'
/**
 * ...and modules.
 */
    , 'src/modules/core/module'
    , 'src/modules/navigation/module'
    , 'src/modules/app/module'
    , 'src/modules/todo/module'
    , 'src/modules/dashboard/module'
    , 'src/modules/contactList/module'

], function (namespace) {
    'use strict';
    angular.module(namespace, [
        'ngRoute'
        , 'ui.router'
    /**
     * We need to load the resources before everything.
     */
        ,'resources.views'
    /**
     * App modules
     */

        , namespace + '.core'
        , namespace + '.app'
        , namespace + '.todo'
        , namespace + '.dashboard'
        , namespace + '.contacts'

    /**
     * App components
     */
        , namespace + '.components.todo.pending'
        , namespace + '.components.contacts.phoneBook'
    ]);
    return {
        name: namespace
    };

});
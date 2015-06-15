define([
    '../../../config/namespace',
    './directives/pending'
], function (namespace,pending) {
    'use strict';
    angular.module(namespace + '.components.todo.pending', [namespace + '.todo'])
    /**
     * Turn into <todo-pending-tasks/>
     */
        .directive('todoPendingTasks', pending);
});
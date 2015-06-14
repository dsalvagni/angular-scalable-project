define([
    '../../../config/namespace',
    './directives/undone'
], function (namespace,undone) {
    'use strict';
    angular.module(namespace + '.components.todo.undone', [namespace + '.todo'])
    /**
     * Turn into <todo-undone-tasks/>
     */
        .directive('todoUndoneTasks', undone);
});
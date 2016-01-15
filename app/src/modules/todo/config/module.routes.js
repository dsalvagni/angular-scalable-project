define(function () {
    'use strict';
    var partialPath = "src/modules/todo/view/";

    return [
        {
            state: 'todo',
            config: {
                url: "/todo",
                controller: 'todoCtrl as vm',
                templateUrl: partialPath + "todo/index.html"
            }
        }
    ];
});
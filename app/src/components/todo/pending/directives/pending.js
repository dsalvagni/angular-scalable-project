define(function () {
    "use strict";
    function undone() {
        var partialPath = "src/components/todo/pending/view/";
        return {
            restrict: 'E',
            templateUrl: partialPath + '_pending.html',
            controller: undoneCtrl,
            controllerAs: 'vm',
            bindToController: true
        }
    }

    undoneCtrl.$inject = ['todoSvc'];

    /*@ngInject*/
    function undoneCtrl(todoSvc) {
        var items = [],
            vm = this;
        vm.isReady = false;
        vm.done = function (item) {
            item.done = true;
        };
        vm.getItems = function () {
            items = items.filter(function (item) {
                return !item.done;
            });
            return items;
        };
        vm.add = function (item, $event) {
            if ($event.keyCode !== 13) return false;
            items.push({description: item.description, done: false});
            vm.item = {};
        };
        todoSvc.getAllUndone().then(function (data) {
            items = data;
            vm.isReady = true;
        }).catch(function () {
            vm.isReady = true;
        });
    }

    return undone;
});

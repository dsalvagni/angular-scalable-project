define(function () {
    'use strict';
    todo.$inject = ['todoSvc'];
    /*@ngInject*/
    function todo(TodoSvc) {
        var vm = this;

        vm.items = [];
        vm.add = add;
        vm.getSelectedTasks = getSelectedTasks;
        vm.deleteSelected = deleteSelected;

        getAllTasks();
        
        function getAllTasks() {
            TodoSvc.getAllTasks().then(function (data) {
                vm.items = data.items;
            });
        }

        function add(item, $event) {
            if ($event.keyCode !== 13) return false;
            vm.items.push({description: item.description, done: false});
            vm.item = {};
        }

        function getSelectedTasks() {
            return vm.items.filter(function (item) {
                return item.done;
            });
        }
        
        function deleteSelected(items) {
            if (!confirm('Are you sure?')) return false;
            vm.items = items.filter(function (item) {
                return !item.done;
            });
        }
        

    }
    
    return todo;
});

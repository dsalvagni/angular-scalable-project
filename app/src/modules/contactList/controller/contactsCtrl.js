define([], function () {
    'use strict';
    /*@ngInject*/
    var contacts = function ($rootScope, $scope, contactsSvc) {
        $scope.items = [];
        $scope.groups = ['Friends','Family','Others'];
        function getAllContacts() {
            contactsSvc.getAllContacts().then(function (data) {
                $scope.items = data.items;
            });
        }

        $scope.toggleSelected = function (item) {
            item.selected = !item.selected;
        };

        $scope.add = function (newItem) {
            $scope.items.push(newItem);
            delete $scope.newItem;
            $scope.showForm = false;
        };

        $scope.getSelected = function () {
            return $scope.items.filter(function (item) {
                return item.selected;
            });
        };
        $scope.deleteSelected = function (items) {
            if (!confirm('Are you sure?')) return false;
            $scope.items = items.filter(function (item) {
                return !item.selected;
            });
        };
        getAllContacts();

    };
    contacts.$inject = ['$rootScope', '$scope', 'contactsSvc'];
    return contacts;
});
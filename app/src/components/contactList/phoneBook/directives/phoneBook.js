define([], function () {
    "use strict";
    var phoneBook = function () {
        var partialPath = "src/components/contactList/phoneBook/view/";
        return {
            restrict: 'E',
            templateUrl: partialPath + '_phoneBook.html',
            /*@ngInject*/
            controller: ['$scope', 'contactsSvc', function ($scope, contactsSvc) {
                $scope.items = [];
                $scope.isReady = false;
                contactsSvc.getAllContacts().then(function (data) {
                    $scope.items = data.items;
                    $scope.isReady = true;
                }).catch(function () {
                    $scope.isReady = true;
                });
            }]
        }
    };
    return phoneBook;
});
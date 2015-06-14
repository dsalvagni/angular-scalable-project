(function () {
    'use strict';
    define([], function () {
        var AppController = function ($scope,PrimaryNavigationProvider) {
            $scope.primaryNavigation = PrimaryNavigationProvider.getNavigation();
        };
        AppController.$inject = ['$scope','PrimaryNavigationProvider'];
        return AppController;
    });
})();
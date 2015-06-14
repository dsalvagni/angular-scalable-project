    define([], function () {
        'use strict';
        var App = function ($scope,PrimaryNavigation) {
            $scope.primaryNavigation = PrimaryNavigation.getNavigation();
        };
        App.$inject = ['$scope','PrimaryNavigation'];
        return App;
    });
    define([], function () {
        'use strict';
        /*@ngInject*/
        var App = function ($scope,PrimaryNavigation) {
            $scope.primaryNavigation = PrimaryNavigation.getNavigation();
        };
        App.$inject = ['$scope','PrimaryNavigation'];
        return App;
    });
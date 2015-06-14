define([], function () {
    'use strict';
    var moduleConfig = function ($stateProvider) {
        var partialPath = "src/modules/dashboard/view/";
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: partialPath + "dashboard/index.html"
            });
    };

    moduleConfig.$inject = ['$stateProvider'];
    return moduleConfig;
});
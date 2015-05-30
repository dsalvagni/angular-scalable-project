(function () {
    'use strict';
    define([], function () {
        var ModuleConfig = function ($stateProvider) {
            var partialPath = "src/modules/dashboard/view/";
            $stateProvider
                .state('dashboard', {
                    url: "/dashboard",
                    templateUrl: partialPath + "dashboard/index.html"
                });
        };

        ModuleConfig.$inject = ['$stateProvider'];
        return ModuleConfig;
    });
})();
(function () {
    'use strict';
    define([], function () {
        var AppConfig = function ($urlRouterProvider) {
            $urlRouterProvider
            /**
             * Redirect to root
             */
                .otherwise('/dashboard');
        };

        AppConfig.$inject = ['$urlRouterProvider'];
        return AppConfig;
    });
})();
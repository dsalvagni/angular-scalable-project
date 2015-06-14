define([], function () {
    'use strict';
    /*@ngInject*/
    var appConfig = function ($urlRouterProvider) {
        $urlRouterProvider
        /**
         * Redirect to root
         */
            .otherwise('/dashboard');
    };

    appConfig.$inject = ['$urlRouterProvider'];
    return appConfig;
});

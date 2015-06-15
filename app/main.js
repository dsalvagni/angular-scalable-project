requirejs.config({
    baseUrl: './',
    paths: {
        angular: 'vendor/angular/angular.min',
        jquery: 'vendor/jquery/jquery.min',
        bootstrap: 'vendor/bootstrap/bootstrap.min',
        'angular-route': 'vendor/angular/angular-route.min',
        'angular-ui-router': 'vendor/angular/angular-ui-router.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular', 'angular-route']
        },
        'angular-route': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require([
    'angular',
    'angular-ui-router',
    'angular-route'
], function () {
    require(['app'], function (app) {
        angular.bootstrap(document, [app.name]);
    });

});
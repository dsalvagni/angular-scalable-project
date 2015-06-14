requirejs.config({
    baseUrl: './',
    paths: {
        angular: ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min',
            'vendor/angular/angular.min'],
        jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
        'vendor/jquery/jquery.min'],
        bootstrap : ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
            'vendor/bootstrap/bootstrap.min'],
        'angular-route': 'vendor/angular/angular-route.min',
        'angular-ui-router': 'vendor/angular/angular-ui-router.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular','angular-route']
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
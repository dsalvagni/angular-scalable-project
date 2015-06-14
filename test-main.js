var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        } else {
        }
    }
}

requirejs.config({
    baseUrl: '/base/app/',
    paths: {
        angular: 'vendor/angular/angular.min',
        'angular-route': 'vendor/angular/angular-route.min',
        'angular-ui-router': 'vendor/angular/angular-ui-router.min',
        'mainApp': 'app.js'
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
    },
    deps: tests,
    callback: window.__karma__.start
});
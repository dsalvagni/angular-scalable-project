define(function () {
    'use strict';
    App.$inject = ['PrimaryNavigation'];
    /*@ngInject*/
    function App(PrimaryNavigation) {
        var app = this;
        app.primaryNavigation = PrimaryNavigation.getNavigation();
    }

    return App;
});

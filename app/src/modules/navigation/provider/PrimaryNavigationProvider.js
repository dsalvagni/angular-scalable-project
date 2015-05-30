(function () {
    'use strict';
    define([], function () {
        var Provider = function () {
            var navigation = [];
            this.$get = function () {
                return {
                    add: function (navigationItem) {
                        navigation.push(navigationItem);
                    },
                    getNavigation: function () {
                        return navigation;
                    }
                }
            };
        }
        return Provider;
    });
})();
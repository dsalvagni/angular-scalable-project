define(function () {
    'use strict';
    var provider = function () {
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
    };
    return provider;
});
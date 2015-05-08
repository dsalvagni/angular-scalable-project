(function () {
    'use strict';
    define([], function () {
        /* @ngInject */
        function appRun(routerHelper) {
            routerHelper.configureStates(getStates());
        }

        function getStates() {
            return [
                {
                    state: 'profile.personal',
                    config: {
                        abstract: true,
                        template: '<ui-view class="shuffle-animation"/>',
                        url: '/profile'
                    }
                },
                {
                    state: 'profile.professional',
                    config: {
                        abstract: true,
                        template: '<ui-view class="shuffle-animation"/>',
                        url: '/profile/professional'
                    }
                },
                {
                    state: 'profile.educational',
                    config: {
                        abstract: true,
                        template: '<ui-view class="shuffle-animation"/>',
                        url: '/profile/educational'
                    }
                },
                {
                    state: 'profile.public',
                    config: {
                        abstract: true,
                        template: '<ui-view class="shuffle-animation"/>',
                        url: '/profile/educational'
                    }
                }
            ];
        }

        angular
            .module('app.customers')
            .run(appRun);
    });
})();
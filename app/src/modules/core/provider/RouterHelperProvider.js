define(function () {
    RouteHelperProvider.$inject = ['$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function RouteHelperProvider($stateProvider, $urlRouterProvider) {
        this.$get = RouterHelper;

        RouterHelper.$inject = ['$state'];
        /* @ngInject */
        function RouterHelper($state) {
            var hasOtherwise = false;

            var service = {
                configureStates: configureStates,
                getStates: getStates
            };

            return service;

            function configureStates(states, otherwisePath, conditions) {
                angular.forEach(states, function (state) {
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
                if(conditions) {
                    angular.forEach(conditions, function (condition) {
                        $stateProvider.when(condition.from, condition.to);
                    });
                }
            }

            function getStates() {
                return $state.get();
            }
        }
    }

    return RouteHelperProvider;
});
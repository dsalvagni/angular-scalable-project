define([], function () {
    'use strict';
    /*@ngInject*/
    var moduleConfig = function ($stateProvider) {
        var partialPath = "src/modules/contactList/view/";
        $stateProvider
            .state('contacts', {
                url: "/contacts",
                controller: 'contactsCtrl',
                templateUrl: partialPath + "contacts/index.html"
            });
    };

    moduleConfig.$inject = ['$stateProvider'];
    return moduleConfig;
});
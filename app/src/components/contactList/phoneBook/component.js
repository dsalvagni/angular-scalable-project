define([
    '../../../config/namespace',
    './directives/phoneBook'
], function (namespace,phoneBook) {
    'use strict';
    angular.module(namespace + '.components.contacts.phoneBook', [namespace + '.contacts'])
    /**
     * Turn into <contact-list-phone-book/>
     */
        .directive('contactListPhoneBook', phoneBook);
});
define(function () {
    'use strict';
    var partialPath = "src/modules/contactList/view/";
    return [
        {
            state: 'contacts',
            config: {
                url: "/contacts",
                controller: 'contactsCtrl as vm',
                templateUrl: partialPath + "contacts/index.html"
            }
        }
    ];
});
define(function () {
    'use strict';
    var partialPath = "src/modules/dashboard/view/";
    return [
        {
            state: 'dashboard',
            config: {
                url: "/dashboard",
                templateUrl: partialPath + "dashboard/index.html"
            }
        }
    ];
});
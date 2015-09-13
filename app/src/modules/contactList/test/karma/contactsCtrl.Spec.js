define([
    'src/config/namespace', 'app'], function (namespace) {
    'use strict';
    var m, contactsCtrl;
    describe(namespace+'.contacts', function () {
        beforeEach(function () {
            m = module(namespace + '.contacts');
        });

        it('should contactsCtrl be define',
            inject(function ($rootScope,
                             $controller) {
                var scope = $rootScope.$new();
                contactsCtrl = $controller('contactsCtrl',
                    {
                        $scope: scope
                    });
                expect(contactsCtrl).toBeDefined();
            }));
    });
});
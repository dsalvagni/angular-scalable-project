define([
    'src/config/namespace', 'app'], function (namespace) {
    'use strict';
    var m, todoCtrl;
    describe(namespace + '.todo', function () {
        beforeEach(function () {
            m = module(namespace + '.todo');
        });

        it('should todoCtrl be define',
            inject(function ($rootScope,
                             $controller) {
                var scope = $rootScope.$new();
                todoCtrl = $controller('todoCtrl',
                    {
                        $scope: scope
                    });
                expect(todoCtrl).toBeDefined();
            }));
    });
});
define([
    'src/config/namespace', 'app'], function (namespace) {
    'use strict';
    var m, todoCtrl;
    describe('ModuleLargeApp.todo', function () {
        beforeEach(function () {
            m = module(namespace + '.todo');
        });

        it('should TodoCtrl be define',
            inject(function ($rootScope,
                             $controller) {
                var scope = $rootScope.$new();
                todoCtrl = $controller('TodoCtrl',
                    {
                        $scope: scope
                    });
                expect(todoCtrl).toBeDefined();
            }));
    });
});
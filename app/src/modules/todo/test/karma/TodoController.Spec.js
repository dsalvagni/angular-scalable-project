(function () {
    'use strict';

    define([
        'src/config/namespace','app'], function (namespace) {

        var m, todoCtrl;
        describe('ModuleLargeApp.todo', function () {
            beforeEach(function () {
                m = module(namespace+'.todo');
            });

            it('should module/todo/TodoController be define',
                inject(function ($rootScope,
                                 $controller) {
                    var scope = $rootScope.$new();
                    todoCtrl = $controller('module/todo/TodoController',
                        {
                            $scope : scope
                        });
                    expect(todoCtrl).toBeDefined();
                }));
        });
    });
})();

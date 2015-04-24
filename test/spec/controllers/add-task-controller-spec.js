(function() {
  'use strict';

  describe('add task controller', function() {
    var $scope;

    beforeEach(module('demoApp'));

    beforeEach(inject(function($rootScope, $controller, $location, taskService) {
      $scope = $rootScope.$new();
      spyOn($location, 'path');
      spyOn(taskService, 'save');
      $controller('AddTaskController', {
        $scope: $scope,
      });
    }));

    it('should add a new task', function() {
      $scope.save({ description: 'Do the dishes'});
    });
  });


})();

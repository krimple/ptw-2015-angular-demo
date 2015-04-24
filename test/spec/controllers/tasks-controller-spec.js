(function (){
  'use strict';

  describe('tasks controller', function() {

    var $scope;

    // boot Angular app and allows us to inject components
    // into our test methods
    beforeEach(module('demoApp'));

    beforeEach(inject(function($controller, $rootScope) {
      $scope = $rootScope.$new();
      $controller('TasksController', {
        $scope: $scope
      });
    }));

    it('should create a child scope', function() {
      expect($scope).toBeDefined();
    });

    it('should define a tasks collection', function() {
      expect($scope.tasks).toBeDefined();
      expect(angular.isArray($scope.tasks)).toBe(true);
    });

  });


})();

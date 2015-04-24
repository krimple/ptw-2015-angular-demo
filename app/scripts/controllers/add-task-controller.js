(function() {
  'use strict';

  angular.module('demoApp')
    .controller('AddTaskController', function($scope, $location, taskService) {
      $scope.save = function(task) {
        taskService.save(task);
        $location.path('#/tasks');
      };
    });
})();

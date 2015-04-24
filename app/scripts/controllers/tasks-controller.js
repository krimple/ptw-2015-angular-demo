(function () {
  'use strict';

  angular.module('demoApp')
    .controller('TasksController', function ($scope, taskService) {
      $scope.tasks = taskService.tasks;
    });
}());

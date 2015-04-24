(function() {
  'use strict';

  angular.module('demoApp', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/tasks', {
          templateUrl: 'views/task-list.html',
          controller: 'TasksController'
        })
        .when('/tasks/add', {
          templateUrl: 'views/add-task.html',
          controller: 'AddTaskController'
        })
        .otherwise({
          redirectTo: '/tasks'
        });

    });

})();



(function() {
  'use strict';

  angular.module('demoApp')
    .factory('taskService', function() {
      return {
        tasks: [],
        save: function(task) {
          task.complete = false;
          task.createDate = new Date();
          this.tasks.push(task);
        }
      };
    });

})();

(function() {
  'use strict';

  describe('task service', function() {

    var taskService;

    beforeEach(module('demoApp'));

    beforeEach(inject(function(_taskService_) {
      taskService = _taskService_;
    }));

    it('should have an empty task list on startup', function() {
          expect(taskService.tasks.length).toBe(0);
    });

    it('should add a task when saved', function() {
      var task = { description: 'Do the bills'};
      taskService.save(task);
      expect(taskService.tasks.length).toBe(1);
    });

  });
})();

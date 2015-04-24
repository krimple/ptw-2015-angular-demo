(function(){
	'use strict';

	describe('The great js tester', function() {

    var theValue;

    beforeEach(function() {
      theValue = 1 + 3;
    });

		it('should test', function() {
			expect(theValue).toBe(4);
		});

	});
})();

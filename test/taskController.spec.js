describe('TaskController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
      ctrl = $controller('TaskController');
  }));

  it('Initialises with an empty set of tasks', function() {
    expect(ctrl.tasks).toBeUndefined();
  });

});

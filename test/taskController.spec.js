describe('TaskController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
      ctrl = $controller('TaskController');
  }));

  it('Initialises with an empty set of tasks', function() {
    expect(ctrl.todos).toBeUndefined();
  });

  it('Contains a list of toDos', function() {
    ctrl.addToDo();
    expect(ctrl.todos).toEqual(todos);
  });

  var todos = [{
    content: 'Walk the dog',
    complete: false
  }];

});

describe('TaskController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
      ctrl = $controller('TaskController');
  }));

  it('Initialises with an empty set of tasks', function() {
    expect(ctrl.todos).toBeEmptyArray();
  });

  it('Contains a list of toDos', function() {
    ctrl.toDoContent = 'Walk the dog';
    ctrl.addToDo();
    expect(ctrl.todos).toEqual(todos);
  });

  var todos = [{
    content: 'Walk the dog',
    complete: false
  }];

});

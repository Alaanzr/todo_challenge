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

  it('Deletes tasks', function() {
    ctrl.toDoContent = 'Walk the dog';
    ctrl.addToDo();
    ctrl.delete(ctrl.todos[0]);
    expect(ctrl.todos.length).toBe(0);
  });

  var todos = [{
    content: 'Walk the dog',
    complete: false
  }];

});

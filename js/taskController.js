toDoApp.controller('TaskController', function() {
  var self = this;

  self.todos = [];

  self.addToDo = function() {
    self.todos.push({content: self.toDoContent, complete: false, modifyInProgress: false});
    self.toDoContent = '';
  };

  self.delete = function(todo) {
    var index = self.todos.indexOf(todo);
    if (index > -1) { self.todos.splice(index, 1); }
  };

  self.edit = function(todo) {
    return todo.modifyInProgress ? todo.modifyInProgress = false : todo.modifyInProgress = true;
  };

  self.completeTasks = function() {
    return self.todos.filter(function(task) { return task.complete === true;}).length;
  };

  self.activeTasks = function() {
    return self.todos.filter(function(task) { return task.complete === false;}).length;
  };
});

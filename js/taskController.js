toDoApp.controller('TaskController', function() {
  var self = this;

  self.todos = [];

  self.addToDo = function() {
    self.todos.push({content: self.toDoContent, complete: false});
    self.toDoContent = '';
  };

  self.delete = function(todo) {
    var index = self.todos.indexOf(todo);
    if (index > -1) { self.todos.splice(index, 1); }
  };
});

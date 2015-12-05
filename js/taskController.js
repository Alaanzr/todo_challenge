toDoApp.controller('TaskController', function() {
  var self = this;

  self.todos = [];

  self.addToDo = function() {
    self.todos.push({content: self.toDoContent, complete: false});
    self.toDoContent = '';
  };
});

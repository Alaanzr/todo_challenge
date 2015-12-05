toDoApp.controller('TaskController', function() {
  var self = this;

  self.addToDo = function() {
    self.todos = [{
      content: 'Walk the dog',
      complete: false
    }];
  };
});

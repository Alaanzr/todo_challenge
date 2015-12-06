describe('toDo App', function() {

  var inputBox = element(by.model('task.toDoContent'));
  var addTask = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('Has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('Contains the task on the page after an insert', function() {
    inputBox.sendKeys('Walk the dog');
    addTask.click();
    var task = element.all(by.repeater('todo in task.todos'));
    expect(task.last().getText()).toContain('Walk the dog');
  });

  // it('Marks a task as completed', function() {
  //   inputBox.sendKeys('Walk the dog');
  //   addTask.click();
  //   var task = element.all(by.repeater('todo in task.todos'));
  //
  //   expect(task.last().getText()).toContain('Walk the dog');
  // });
});

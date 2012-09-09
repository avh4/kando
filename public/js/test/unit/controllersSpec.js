describe('ProjectsController', function(){

  var scope, ctrl;

  beforeEach(function() {
    scope = {};
    ctrl = new ProjectsController(scope);
  });

  it('should start with no projects', function() {
    expect(scope.projects.length).toBe(0);
  });

  describe('adding a project', function() {
    beforeEach(function() {
      scope.newProject = {"name": "Learn to draw"};
      scope.addProject();
    });

    it('should add the project to the project list', function() {
      expect(scope.projects.length).toBe(1);
    });

    it('should give the new project the entered name', function() {
      expect(scope.projects[0].name).toBe("Learn to draw");
    });

    it('should reset the add form', function() {
      expect(scope.newProject.name).toBeUndefined();
    });

    it('should show the project detail for the new project', function() {
      expect(scope.selectedProject.name).toBe("Learn to draw");
    })
  });

  describe('selecting a project', function() {
    beforeEach(function() {
      scope.projects = [{"name": "Go hunting" }, {"name": "Kiss in the rain"}];
      scope.showProjectDetail(projects[0]);
    });

    it('should show the project detail for the selected project', function() {
      expect(scope.selectedProject).toBe(projects[0]);
    });
  });

  describe('adding a task', function() {
    beforeEach(function() {
      scope.newProject = {"name": "Go fishing"};
      scope.addProject();
      scope.newTask = {"description": "Hang sign on door"};
      scope.addTask();
    });

    it('should add the task to the selected project', function() {
      expect(scope.selectedProject.tasks.length).toBe(1);
    });

    it('should give the new task the entered description', function() {
      expect(scope.selectedProject.tasks[0].description).toBe("Hang sign on door");
    });

    it('should reset the add form', function() {
      expect(scope.newTask.description).toBeUndefined();
    });
  });
});

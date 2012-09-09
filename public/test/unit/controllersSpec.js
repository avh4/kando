
describe('ProjectsController', function(){
  var scope, ctrl;

  beforeEach(function() {
    scope = {};
    state = jasmine.createSpyObj("state", ["setSelectedProject"]);
    ctrl = new ProjectsController(scope, state);
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

    it('should update the selection state', function() {
      expect(state.setSelectedProject).toHaveBeenCalled();
    });
  });

  describe('selecting a project', function() {
    var hunting = {name: "Go hunting"};
    beforeEach(function() {
      scope.showProjectDetail(hunting);
    });

    it('should update the selection state', function() {
      expect(state.setSelectedProject).toHaveBeenCalledWith(hunting);
    });
  });
});

describe('TasksController', function () {
  var scope, ctrl, project;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
    project = {"name": "Go fishing", tasks:[]};
    ctrl = new TasksController(scope);
  }));

  describe('when a project is selected', function() {
    beforeEach(function() {
      scope.$broadcast("selectedProjectChanged", project);
    });

    it('should show the project detail for the selected project', function() {
      expect(scope.project).toBe(project);
    });
  });

  describe('adding a task', function() {
    beforeEach(function() {
      scope.$broadcast("selectedProjectChanged", project);
      scope.newTask = {"description": "Hang sign on door"};
      scope.addTask();
    });

    it('should add the task to the selected project', function() {
      expect(scope.project.tasks.length).toBe(1);
    });

    it('should give the new task the entered description', function() {
      expect(scope.project.tasks[0].description).toBe("Hang sign on door");
    });

    it('should reset the add form', function() {
      expect(scope.newTask.description).toBeUndefined();
    });
  });
});

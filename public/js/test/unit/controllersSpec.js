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
      scope.add();
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
  });
});

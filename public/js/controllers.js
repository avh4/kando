function ProjectsController($scope) {
  $scope.projects = [];

  $scope.addProject = function() {
    var project = { "name": $scope.newProject.name, "tasks":[] };
    $scope.projects.push(project);
    $scope.newProject = {};
    $scope.showProjectDetail(project);
  };

  $scope.showProjectDetail = function(project) {
    $scope.selectedProject = project;
  };

  $scope.addTask = function() {
    $scope.selectedProject.tasks.push({ "description": $scope.newTask.description });
    $scope.newTask = {};
  };
}

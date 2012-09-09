function ProjectsController($scope) {
  $scope.projects = [];

  $scope.addProject = function() {
    var project = { "name": $scope.newProject.name };
    $scope.projects.push(project);
    $scope.newProject = {};
    $scope.showProjectDetail(project);
  };

  $scope.showProjectDetail = function(project) {
    $scope.selectedProject = project;
  };
}

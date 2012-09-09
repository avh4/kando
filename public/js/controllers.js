function ProjectsController($scope) {
  $scope.projects = [];

  $scope.add = function() {
    $scope.projects.push({ "name": $scope.newProject.name });
    $scope.newProject = {};
  }
}
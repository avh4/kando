var kandoModule = angular.module('kandoModule', []);
kandoModule.factory('selectionStateService', function($rootScope) {
  var state = {};

  state.setSelectedProject = function(project) {
    this.selectedProject = project;
    $rootScope.$broadcast('selectedProjectChanged', project);
  };

  return state;
});

function ProjectsController($scope, selectionStateService) {
  $scope.projects = [];

  $scope.addProject = function() {
    var project = { "name": $scope.newProject.name, "tasks":[] };
    $scope.projects.push(project);
    $scope.newProject = {};
    $scope.showProjectDetail(project);
  };

  $scope.showProjectDetail = function(project) {
    selectionStateService.setSelectedProject(project);
  };
};

function TasksController($scope) {
  $scope.$on('selectedProjectChanged', function(event, m) {
    $scope.project = m;
  });

  $scope.addTask = function() {
    $scope.project.tasks.push({ "description": $scope.newTask.description });
    $scope.newTask = {};
  };
};

ProjectsController.$inject = ['$scope', 'selectionStateService'];
TasksController.$inject = ['$scope'];

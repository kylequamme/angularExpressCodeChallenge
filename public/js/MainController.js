//controller for the body of the SPA
angular.module('xiApp', ['ngAnimate']).controller('MainController', function($scope, $http){
  $scope.getStudents = getStudents;
  $scope.showStudents = false;
  //function to get data from express route
  function getStudents(){
    $http({method: 'GET', url: '/students'}).then(handleSuccess, handleFailure);
  }
  //handler functions for getStudents()
  function handleSuccess(response){
    $scope.students = response.data;
    $scope.showStudents = true;
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
});

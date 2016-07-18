//controller for the body of the SPA
angular.module('xiApp', []).controller('MainController', function($scope, $http){
  $scope.getStudents = getStudents;
  //function to get data from express route
  function getStudents(){
    $http({method: 'GET', url: '/students'}).then(handleSuccess, handleFailure);
  }
  //handler functions for getStudents()
  function handleSuccess(response){
    $scope.students = response.data;
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
});

angular.module('angularExpress')
.controller('login', function($scope, $http, $location){
  $scope.createUser = function(){
    var user = {
      username: $scope.username,
      password: $scope.password
    };

    $http.post('/users/create', user)
    .then(function(result){
      localStorage.setItem('user', JSON.stringify(result.data));

      $location.path('/dashboard');
    })
    .catch(function(error){
      console.error(error);
    });
  };

});

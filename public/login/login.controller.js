angular.module('angularExpress')
.controller('login', function($scope, $http){
  $scope.createUser = function(){
    var user = {
      username: $scope.username,
      password: $scope.password
    };

    $http.post('/users/create', user)
    .then(function(result){
      console.log(result);
    })
    .catch(function(error){
      console.error(error);
    });

  };

});

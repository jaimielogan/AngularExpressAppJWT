var angularExpress = angular.module('angularExpress', ['ngRoute']);

angularExpress.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/' ,{
    templateUrl: 'login/login.template.html',
    controller: 'login'
  });
});

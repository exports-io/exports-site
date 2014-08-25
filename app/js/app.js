'use strict';

angular.module('myApp', [
  'ui.router',

  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "app/views/home.html"
      })


      .state('login', {
        url: "/login",
        templateUrl: "app/views/login.html"
      });


    $urlRouterProvider.otherwise("/");
    //$locationProvider.html5Mode(true);


  });

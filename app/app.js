'use strict';

angular.module('myApp', [
  'ui.router',

  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])

  .config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "app/views/home.html"
      });


    $urlRouterProvider.otherwise("/");


  });

'use strict';

angular.module('myApp', [
		'ui.router',

		'myApp.filters',
		'myApp.services',
		'myApp.directives',
		'myApp.controllers'
])

		.run(function () {
				particlesJS('particles-js', {
						particles: {
								color: '#fff',
								shape: 'edge',
								opacity: 1,
								size: 2.5,
								size_random: true,
								nb: 150,
								line_linked: {
										enable_auto: true,
										distance: 250,
										color: '#fff',
										opacity: 0.5,
										width: 1,
										condensed_mode: {
												enable: false,
												rotateX: 600,
												rotateY: 600
										}
								},
								anim: {
										enable: true,
										speed: 2.5
								}
						},
						interactivity: {
								enable: true,
								mouse: {
										distance: 350
								},
								detect_on: 'canvas',
								mode: 'grab',
								line_linked: {
										opacity: 0.5
								},
								events: {
										onclick: {
												push_particles: {
														enable: false,
														nb: 4
												}
										}
								}
						},
						retina_detect: true
				});
		})

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
				$locationProvider.html5Mode(true);


		});

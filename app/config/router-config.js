'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('' , '/home');
  $urlRouterProvider.when('/' , '/home');
  $urlRouterProvider.when('/login' , '/join#login');

  let states = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    // {
    //   name: 'landing',
    //   url: '/landing',
    //   template: require('../view/landing/landing.html'),
    //   controller: 'LandingController',
    //   controllerAs: 'landingCtrl'
    // }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
}

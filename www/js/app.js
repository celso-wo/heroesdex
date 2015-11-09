// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'templates', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  /*
   * HEROES
   */

  .state('app.heroes', {
    url: '/heroes',
    views: {
      'menuContent': {
        templateUrl: 'templates/heroes/heroes.html',
        controller: 'HeroesCtrl'
      }
    }
  })
  .state('app.heroes-detail', {
    url: '/heroes/:index',
    views: {
      'menuContent': {
        templateUrl: 'templates/heroes/heroes-detail.html',
        controller: 'HeroesDetailCtrl'
      }
    }
  })

  /*
   * BATTLEGROUNDS
   */

  .state('app.battlegrounds', {
    url: '/battlegrounds',
    views: {
      'menuContent': {
        templateUrl: 'templates/battlegrounds/battlegrounds.html'
        //controller: 'HeroesDetailCtrl'
      }
    }
  })

  /*
   * BATTLEGROUNDS
   */

  .state('app.news', {
    url: '/news',
    views: {
      'menuContent': {
        templateUrl: 'templates/news/news.html',
        //controller: 'HeroesDetailCtrl'
      }
    }
  })

  /*
   * CONFIGURATION
   */

  .state('app.configuration', {
    url: '/configuration',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuration/configuration.html',
        //controller: 'HeroesDetailCtrl'
      }
    }
  })
  .state('app.configuration-developers', {
    url: '/configuration/developers',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuration/configuration-developers.html',
        //controller: 'HeroesDetailCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/heroes');

});

app.config(function($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
});

app.config(function($animateProvider) {
  $animateProvider.classNameFilter( /\banimated\b/);
});

app.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);
  $ionicConfigProvider.scrolling.jsScrolling(false);
});

var controllers = angular.module('templates', []);

var controllers = angular.module('starter.controllers', []);
var services = angular.module('starter.services', []);

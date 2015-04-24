var aolHome = angular.module('aolHome', [
                              'ngRoute', 'ngMaterial', 'ngMdIcons',
                              'angular-carousel'
                              ]);

aolHome.controller('MainCtrl', [
  '$scope', '$route', '$routeParams', '$location', '$mdMedia',
  function ($scope, $route, $routeParams, $location, $mdMedia) {
    $scope.go = function (path) {
      $location.url(path);
    };
  }
]);


aolHome.controller('AOLHomeCtrl', [
  '$scope', '$routeParams', '$timeout', '$http',
  function ($scope, $routeParams, $timeout, $http) {
    $scope.description = 'This is the description part of the page. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';

    $scope.slides = [
      {image: 'images/img00.jpg', desc: 'img 0'},
      {image: 'images/img01.jpg', desc: 'img 1'},
      {image: 'images/img02.jpg', desc: 'img 2'}
    ];

  }
]);


aolHome.controller('PlacesCtrl', [
  '$scope',
  function ($scope) {
    $scope.images = [
      { image: 'images/img00.jpg', 
        name: 'Meditation Hall' ,
        desc: 'This is the Meditation hall of the ashram.' },
      { image: 'images/img01.jpg',
        name: 'Residential Block',
        desc: 'This is the Residential block of the ashram.' }
    ]
  }
]);

aolHome.controller('LocationCtrl', [
  '$scope',
  function ($scope) {
  
  }
]);

aolHome.controller('EventsCtrl', [
  '$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.eventsContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';
  }
]);


aolHome.config(['$mdThemingProvider', '$routeProvider',
  function($mdThemingProvider, $routeProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('amber')
      .accentPalette('orange');

    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'AOLHomeCtrl'
      })
      .when('/places', {
        templateUrl: 'places.html',
        controller: 'PlacesCtrl'
      })
      .when('/location', {
        templateUrl: 'location.html',
        controller: 'LocationCtrl'
      })
      .when('/events', {
        templateUrl: 'events.html',
        controller: 'EventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

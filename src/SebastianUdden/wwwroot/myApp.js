var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'html/main.html',
        controller: 'myCtrl'
    })

    .when('/about', {
        templateUrl: 'html/about.html',
        controller: 'myCtrl'
    })

    .when('/resume', {
        templateUrl: 'html/resume.html',
        controller: 'myCtrl'
    })

    .when('/skills', {
        templateUrl: 'html/skills.html',
        controller: 'myCtrl'
    })

    .when('/portfolio', {
        templateUrl: 'html/portfolio.html',
        controller: 'myCtrl'
    })

    .when('/contact', {
        templateUrl: 'html/contact.html',
        controller: 'myCtrl'
    });
});
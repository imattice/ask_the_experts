var askTheExperts = angular.module('askTheExperts', ['ui.router']);

askTheExperts.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url:'',
        templateUrl: 'partials/home.html'
    });
});

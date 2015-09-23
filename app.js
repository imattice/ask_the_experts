var askTheExperts = angular.module('askTheExperts', ['ui.router']);

askTheExperts.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('questions', {
        url:"",
        templateUrl: 'partials/questions.html',
        controller: 'QuestionsCtrl'
    });

    $stateProvider.state('specificQuestion', {
        url:"/:questionId",
        templateUrl: "partials/specificQuestion.html",
        controller: 'AnswersCtrl'
    });
});

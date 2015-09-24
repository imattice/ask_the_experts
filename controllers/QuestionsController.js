askTheExperts.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
    $scope.questions = QuestionsFactory.questions;
    $scope.QuestionsFactory = QuestionsFactory;

    $scope.filterAnswered = function(question) {
        return question.answers.length === 0;
    };

    $scope.filterUnanswered = function(question) {
        return question.answers.length >= 1;
    };
});

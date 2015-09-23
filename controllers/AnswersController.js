askTheExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
    $scope.addAnswer = function() {
        $scope.question.answers.push({ answer_key: $scope.answer });
        $scope.answer = null;
    }
})

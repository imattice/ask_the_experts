askTheExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
    $scope.addAnswer = function() {
        $scope.question.answers.push({ answer_key: $scope.user_answer });
        $scope.user_answer = null;
        console.log($scope.question.answers);
    }
})

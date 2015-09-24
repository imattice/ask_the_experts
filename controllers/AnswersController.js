askTheExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
    $scope.addAnswer = function() {
        $scope.question.answers.push({ answer_key: $scope.user_answer });
        $scope.user_answer = null;
        console.log($scope.question.answers);
    }

    $scope.rate = function() {
        $scope.question.answers.push({ rating_key: $scope.rating})
    }

    $scope.vote = function() {
        var vote = 0;
        if(banana === true) {
            vote ++;
        } else if(poo === true) {
            vote --;
        }
        $scope.question.answers.push({ vote_key: $scope.vote })
        return vote;
    }
})

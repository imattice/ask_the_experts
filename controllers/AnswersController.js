askTheExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
    $scope.addAnswer = function() {
        $scope.question.answers.push({ answer_key: $scope.user_answer, vote_key: 14 });
        $scope.user_answer = null;
        console.log($scope.question.answers);
    }

    $scope.rate = function() {
        $scope.question.answers.push({ rating_key: $scope.rating})
    }


// unnessesary
    // $scope.vote = function(input) {
    //     // debugger;
    //     var vote_value = 0;
    //     if(input === 'banana') {
    //         vote_value ++;
    //     } else if(input === 'poo') {
    //         vote_value --;
    //     }
    //     $scope.question.answers.push({ vote_key: $scope.vote_value })
    //
    //     console.log(vote_value);
    //
    //     // return vote_value;
    // }
})

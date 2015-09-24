askTheExperts.factory('QuestionsFactory', function QuestionsFactory() {
    var factory = {};
    console.log(factory);
    factory.questions = [
        { question_key: 'answered?', id: 1, answers: [{answer_key: 'yes', vote_key: 10}, {answer_key: 'no', vote_key: 3}]},
        { question_key: 'unanswered?', id: 2, answers: []},
        { question_key: 'test?', id:16, answers: [{answer_key: 'no', vote_key: 0}]}
        ];
    factory.addQuestion = function() {
        factory.questions.push({ question_key: factory.user_question, id: factory.questions.length +1, answers: [] });
        factory.user_question = null;
    console.log(factory.questions);
    };

    return factory;
});

//
// factory object {
//     questions array [
//         question object {
//             user_question: 'What',
//             id: 1,
//             answers: []
//             },
//         question object {'HOw', 2, []},
//         question object {'Why', 3, []}
//     ]
// }

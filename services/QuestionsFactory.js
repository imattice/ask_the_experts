askTheExperts.factory('QuestionsFactory', function QuestionsFactory() {
    var factory = {};
    console.log(factory);
    factory.questions = [];
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

askTheExperts.factory('QuestionsFactory', function QuestionsFactory() {
    var factory = {};
    factory.questions = [];
    factory.addQuestion = function() {
        factory.questions.push({ question_key: factory.user_question, id: factory.questions.length +1, answers: [] });
        factory.user_question = null;
    };

    return factory;
});

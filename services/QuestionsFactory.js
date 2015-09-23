askTheExperts.factory('QuestionsFactory', function QuestionsFactory() {
    var factory = {};
    factory.questions = [];
    factory.addCourse = function() {
        factory.questions.push({ question: factory.question, id: factory.questions.length +1, answers: []});
        factory.question = null;
    };
    return factory;
});

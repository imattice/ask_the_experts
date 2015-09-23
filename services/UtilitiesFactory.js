askTheExperts.factory('UtilitiesFactory', function() {
    return {
        findById: function(questions, id) {
            for (var i = 0; i < questions.length; i++) {
                if (questions[i].id == id)
                return questions[i];
            }
            return null;
        }
    };
});

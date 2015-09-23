askTheExperts.factory('UtilitiesFactory', function() {
    return {
        findById: function(questions, id) {
            for (var i = 0; i < questions.length; i++) {
                if (collection[i].id == id)
                return collection[i];
            }
            return null;
        }
    };
});

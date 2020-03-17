console.log("Hello!")

var questions = [
    {
        prompt: "What was Ash Ketchum's first Pokemon?",
        choices: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"],

    },

    {
        prompt: "What region is Pacifidlog Town located in?",
        choices: ["Kanto", "Hoenn", "Galar", "Unova"],
    }
]

for (var i = 0; i < questions.length; i++) {

    var prompt = $("<div/>").text(questions[i].prompt)

    $("#questions").append(prompt)

    var trivia = $("#questions");
    for (var j = 0; j < questions[i].choices.length; j++) {
        var input = $("<input/>");
        var label = $("<label/>");
        var br = $("<br/>");
        input.attr({
            type: "radio",
            name: "pokemon",
            value: questions[i].choices[j]

        });
        label.attr("for", questions[i].choices[j]);
        label.text(questions[i].choices[j]);
        trivia.append(input);
        trivia.append(label);
        trivia.append(br)

    }
}



console.log("Hello!")

var questions = [
    {
        prompt: "What was Ash Ketchum's first Pokemon?",
        choices: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"],
        answer: "d"
    }
]

$(".question1").text(questions[0].prompt)
var trivia = $(".trivia")

for(var i = 0; i < questions[0].choices.length; i++) {
    
}
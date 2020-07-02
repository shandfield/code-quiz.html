var quizContainer = document.querySelector('quiz');
var resultsContainer = document.querySelector('results');
var startButton = document.getElementById('Start');

var QuestionIndex= 0; 
var QuestionChoice= document.getElementById("Choices");
var AnswerIndex=0;
var AnswerChoice= document.getElementById("Answer");
var results= false;
var timeEL= document.querySelector(".time");
var mainEL= document.getElementById("main");
var secondsLeft= 60;
var questions = [
    {
      title: "Which Disney movie was the first?:",
      choices: ["Sleeping-Beauty","Snow-White-and-the-Seven-Dwarfs","Pinocchio","The-Little-Mermaid"],
      answer: "Snow White and the Seven Dwarfs"
    },
    {
      title: "Which system was the first created by  Nintendo?",
      choices: ["N64", "NES", "GameBoy", "Super Nintendo"], 
      answer: "NES"
    },
    {
        title: "Which game was the first made for the N64?",
        choices: ["Legend of Zelda", "Super Mario 64", "Super Smash", "Mario Party"],
        answer: "Super Mario 64"
    },
    {
        title: "Which pokemon meet Ash in answers group sporting some cool shades?",
        choices: ["Bulbasaur", "Charmander", "Squirtle", "Growlithe"],
        answer: "Squirtle"
    },
    {
        title: "What famous Witcher is known as the White Wolf?",
        choices: ["Vesimer", "Geralt", "Eskol", "Lambert"],
        answer: "Geralt"
    },
    {
        title: "What game released in 2017, has you playing answers female lead as answers hunter in answers world overrun by machines?",
        choices: ["Horizon Zero Dawn", "Uncharted", "The Last of Us", "Tomb Raider"],
        answer: "Horizon Zero Dawn"
    },  
    {
        title: "What recently released game during the pandemic took off with people being able to virtually visit each other on islands?",
        choices: ["The Last of Us 2", "Animal Crossing", "Call of Duty", "Kakarot"],
        answer: "Animal Crossing",
    }, 
    {
        title: "Which show is based in Japan and is about bringing people together over food?",
        choices: ["Midnight Gospel", "Samurai Champloo", "Cowboy Bebop", "Midnight Diner: Toyko Stories"],
        answer: "Midnight Diner: Toyko Stories"
    }
  ];

  var score= 0; //need a function for score

function startQuiz(){
    var begin= document.getElementById("Begin");
        begin.setAttribute( "class", "Hide");
    var Context= document.getElementById("Context");
        Context.removeAttribute("class");
    getQuestions(); 
    }
startButton.onclick= startQuiz; 

function getQuestions(){
      var currentQuestion= questions[QuestionIndex];
        var titlequestion= document.getElementById("Title"); 
            titlequestion.textContent= currentQuestion.title;

    currentQuestion.choices.forEach(function(choice, i) {
        var choicebutton= document.createElement("button");
            choicebutton.setAttribute("class", "choices");
                choicebutton.setAttribute("value", QuestionChoice);
                    choicebutton.textContent=i+ 1 + ". " + QuestionChoice;
                        QuestionChoice.appendChild(choicebutton);
    })
}

for (i=0; i < QuestionChoice.length; i++){
    var choicebutton=$("<button>");
        choicebutton.attr("choice-letter",QuestionChoice[i]);
        choicebutton.text(QuestionChoice[i]); //choices
        $("#button").append(choicebutton)
}
$('choice-button').on("click", function(){
    var choicesMag= $('<div>');
        choicesMag.addClass("Choices");
        choicesMag.text($(this).attr("Choices"));
        $('#display').append(QuestionChoice);
});

$("#results").on("Click", function(){
    results= true;
        if(QuestionChoice === AnswerChoice){
            results= i +1
        } else if (QuestionChoice != AnswerChoice){
            total= i + 0;
        }
});
function setTime(){
    var timerInterval= setInterval(function(){
        secondsLeft--;
    if (secondsLeft=== 0){
        clearInterval(timerInterval);
        sendMessage();
    }
    }, 1000);
}
setTime();

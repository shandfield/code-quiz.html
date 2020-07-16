var quizContainer = document.querySelector('quiz');
var resultsContainer = document.querySelector('results');
var startButton = document.getElementById('Start');
var Context= document.getElementById("Context");//the holder for the questions, choices and answers
var QuestionIndex= 0; 
var QuestionChoice= document.getElementById("Choices");
var AnswerIndex=0;
var AnswerChoice= document.getElementById("Answer");
var timeEL= document.querySelector(".time");
var mainEL= document.getElementById("main");
var time= 60;
var timerID;//undefined 
var questions = [
    {
      title: "Which Disney movie was the first?:",
      choices: ["Sleeping Beauty","Snow White and the Seven Dwarfs","Pinocchio","The Little Mermaid"],
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
        title: "Which show is based on 4 characters living in CO?",
        choices: ["South Park", "Futurama", "The Big Bang", "Community"],
        answer: "South Park"
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
        Context.removeAttribute("class");
    timerID= setInterval(clock,1000)//calling the timer and wanting it to run at 1000 millseconds 
    timeEL.textContent=time;//this gives the time Element the number 
    getQuestions(); 
    
    }
startButton.onclick= startQuiz;

function getQuestions(){
      var currentQuestion= questions[QuestionIndex];
        var titlequestion= document.getElementById("Title"); 
            titlequestion.textContent= currentQuestion.title;
            QuestionChoice.innerHTML="";//this will clear out the questions when it runs the function again 
    currentQuestion.choices.forEach(function(choice, i) {
        var choicebutton= document.createElement("button");
            choicebutton.setAttribute("value", choice);
                    choicebutton.textContent=i+ 1 + ". " + choice;
                    choicebutton.onclick= questionClick; 
                    QuestionChoice.appendChild(choicebutton);
                    choicebutton.textContent= currentQuestion.choices[i];
    })
}
function questionClick(){
    if (this.value !== questions[QuestionIndex].answer){
        time -= 5; //this will either subtract 5 or make it 5 when wrong 
        alert ("You are wrong");
        timeEL.textContent=time
    } else {
        time += 5;//this will add time when correct
        alert ("You are correct");
        timeEL.textContent=time //this makes the time read out 
        score++;
    }
    QuestionIndex ++; //this moves the question to the next one 
        if (QuestionIndex=== questions.length){//this will stop the questions 
        endquiz()//calling the function
        } else{//if there are still questions to keep going
        getQuestions ()//calling the function 
        }
    }

function clock (){//clock is used due to calling it from above
    time--;//due to decreasing one each time 
    timeEL.textContent= time;
    if (time===0){
        alert("Time has run out")
        endquiz()//calling the function 
    }
}

function endquiz(){//need to stop the timer
    clearInterval(timerID);
    var end= document.getElementById("End"); 
        end.removeAttribute("class");
    var finalScore= document.getElementById ("Score");
        finalScore.textContent=score;
    console.log(score);
    Context.setAttribute("class","hide"); //the set attribute added the class of hide for the questions 
}
function save(){
    var highScore= document.getElementById("highScores");
    var name= document.getElementById("nameInput").value;
        highScore.removeAttribute("class");
    localStorage.setItem("score",score);
    localStorage.setItem("name",name);
    event.preventDefault(startQuiz);//added this 
        printhighscores();
     }
document.getElementById("SaveBtn").addEventListener("click",save);

function printhighscores(){
    var highScores= JSON.parse(localStorage.getItem("score"));
    var highName= localStorage.getItem("name");
    var high= document.getElementById("High");
    high.append(highName,highScores)
}

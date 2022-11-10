var readlineSync= require("readline-sync");


var name= readlineSync.question("Whats your name: ");
console.log("Welcome "+name,". Do you know Ruman ? ");
var score=0;


function play(question,answer){
  var quesOne= readlineSync.question(question);
  if(quesOne===answer){
    console.log("You are right")
    score++;
  }else{
    console.log("You are wrong");
  }
  console.log(score+" is your score");
  console.log("----");
}


var questions= [{
  question:"Where am I from ? ",
  answer:"Mangalore"
},{
  question:"whats my fav superhero?: ",
  answer:"batman"
},{
  question:"whats my fav car?: ",
  answer:"Bugatti"
}]


for(i=0;i<questions.length;i++){
  var currentQues= questions[i];
console.log(play(currentQues.question,currentQues.answer));
}
console.log("You have scored the total score of: "+score);
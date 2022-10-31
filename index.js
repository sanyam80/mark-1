var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("what is your name? ");
console.log("Welcome " +userName);

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer==answer){
    console.log("right");
    score = score + 1;
  }else{
    console.log("wrong")
  }
  console.log("Your Score is "+score);
  console.log("---------------------------")
}
play("How are you? ","I am good");
play("Where do i live? ","mumbai");
play("What is your profession? ","Developer");
play("Are you a Frontend Developer? ","yes");
play("Are you Watching cricket? ","yes");


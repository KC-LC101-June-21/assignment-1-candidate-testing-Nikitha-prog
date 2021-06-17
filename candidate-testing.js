const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";
let Status;
let questionNumber=1;
let questions=["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ?"," Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers=["Sally Ride"
,"true","40"
,"Trajectory","3"];
let candidateAnswers=[];

function askForName() {
   // TODO 1.1b: Ask for candidate's name //
  candidateName=input.question("Candidate Name: ")
 //console.log("Hello "+ candidateName+"!");

}
function askQuestion(){
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i=0;i<questions.length;i++)
  {
  console.log(`${questionNumber}) ${questions[i]}`);
  questionNumber=questionNumber+1;
  candidateAnswer=input.question(`Your Answer: `);
  candidateAnswers.push(candidateAnswer);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
  console.log("\n");
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly
 let numberOfCorrectAnswer=0;
 let numberOfQuestions;
 numberOfQuestions=questions.length;
  for(i=0;i<candidateAnswers.length;i++)
{
    candidateAnswerslowerCase=candidateAnswers[i].toLowerCase();
    correctAnswersLowercase=correctAnswers[i].toLowerCase();
    if(candidateAnswerslowerCase===correctAnswersLowercase)
  {
    numberOfCorrectAnswer=numberOfCorrectAnswer+1;
  }
}
 let grade;
  grade=(numberOfCorrectAnswer/numberOfQuestions)*100
console.log(`>>> Overall Grade: ${grade} % (${numberOfCorrectAnswer}  of ${numberOfQuestions} responses correct) <<<`)
if(grade<80)
{
console.log(`>>> Status: FAILED <<<`);
}
else
{
console.log(`>>> Status: PASSED <<<`);
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

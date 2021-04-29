'use strict';

// set counter for correct, incorrect, invalid responses for counting
let invalidResponse = 0;
let correctResponse = 0;
let incorrectResponse = 0;

//get username, log to console, respond with welcome statement
let username = prompt('What is your name, pal?');
console.log('username: ' + username);
alert('Hi ' + username + ', welcome! Please answer the following questions about me with yes or no answers.');

//Question 1-----------------------------------------------------------------------------------//


//define question, log answer to the console
let firstAnswer = prompt('Am I married? ').toLowerCase();
console.log('firstAnswer: ' + firstAnswer);

//if user answers any capitalization pattern of yes, no, y, or n response will be given for the corresponding step. For the correct step, the *Response variable will count by one.
if(firstAnswer === 'yes' || firstAnswer === 'y'){
  alert('I am! Hard to believe right?');
  correctResponse ++;
  // console.log('That\'s correct');
  // console.log('correctResponses: ' +correctResponse);
} else if (firstAnswer === 'no' || firstAnswer === 'n'){
  alert('I\'ve been married for almost 10 years, my wife\'s name is Aileen (eye-lean)');
  incorrectResponse ++;
  // console.log('That\'s incorrect');
  // console.log('incorrectResponses: ' +incorrectResponse);
} else {
//The user will get a sassy response if they continue answering with other than accepted answers
  invalidResponse ++;
  alert('Please answer only with yes or no');
  // console.log('Invalid Responses: ' + invalidResponse);
}
//Question 2-----------------------------------------------------------------------------------//


//define question, log answer to the console
let secondAnswer = prompt('Okay, that wasn\'t too terrible, was it? Let\'s do some more... do I have any kids?').toLowerCase();
console.log('secondAnswer: ' + secondAnswer);


//if user answers any capitalization pattern of yes, no, y, or n response will be given for the corresponding step. For the correct step, the *Response variable will count by one.
if(secondAnswer === 'yes' || secondAnswer === 'y'){
  alert('Shocking, but true!');
  correctResponse ++;
  // console.log('That\'s correct');
  // console.log('correctResponses: ' +correctResponse);
} else if (secondAnswer === 'no' || secondAnswer === 'n'){
  alert('Actually I do! 2 beautiful girls!');
  incorrectResponse ++;
  // console.log('That\'s incorrect');
  // console.log('incorrectResponses: ' +incorrectResponse);
} else if (invalidResponse >= 1) {
//The user will get a sassy response if they continue answering with other than accepted answers

  invalidResponse ++;
  // console.log('Invalid Responses: ' + invalidResponse);
  alert('Again?! Yes or no only!');
} else {
  invalidResponse ++;
  // console.log('Invalid Responses: ' + invalidResponse);
  alert('Please answer only with yes or no');
}


//Question 3-----------------------------------------------------------------------------------//


//define question, log answer to the console
let thirdAnswer = prompt('Now that you\'ve learned about my family, let\'s learn about my career! Did I serve in the Army?').toLowerCase();
console.log('thirdAnswer: ' + thirdAnswer);

//if user answers any capitalization pattern of yes, no, y, or n response will be given for the corresponding step. For the correct step, the *Response variable will count by one.
if(thirdAnswer === 'no' || thirdAnswer === 'n'){
  alert('That\'s right, I was actually in the Air Force!');
  correctResponse ++;
  // console.log('That\'s correct');
  // console.log('correctResponses: ' +correctResponse);
} else if (thirdAnswer === 'yes' || thirdAnswer === 'y'){
  alert('Not the Army, but close, I was in the Air Force.');
  incorrectResponse ++;
  // console.log('That\'s incorrect');
  // console.log('incorrectResponses: ' +incorrectResponse);
} else if (invalidResponse >= 1) {
//The user will get a sassy response if they continue answering with other than accepted answers

  invalidResponse ++;
  // console.log('Invalid Responses: ' + invalidResponse);
  alert('Come on, you\'re killing me Smalls. Please only reply with yes or no');
} else {
  invalidResponse ++;
  // console.log('Invalid Responses: ' + invalidResponse);
  alert('Please answer only with yes or no');
}


//Question 4-----------------------------------------------------------------------------------//


//define question, log answer to the console
let fourthAnswer = prompt('Since you know I was in the Air Force now, what do I do now? Do I work for Microsoft?').toLowerCase();
console.log('fourthAnswer: ' + fourthAnswer);


//if user answers any capitalization pattern of yes, no, y, or n response will be given for the corresponding step. For the correct step, the *Response variable will count by one.
if(fourthAnswer === 'no' || fourthAnswer === 'n'){
  alert('That\'s true, I actually work for AWS');
  correctResponse ++;
  // console.log('That\'s correct');
  // console.log('correctResponses: ' +correctResponse);
} else if (fourthAnswer === 'yes' || fourthAnswer === 'y'){
  alert('I don\'t, but I have interviewed with them before');
  incorrectResponse ++;
  // console.log('That\'s incorrect');
  // console.log('incorrectResponses: ' +incorrectResponse);
} else if (invalidResponse >= 1){
//The user will get a sassy response if they continue answering with other than accepted answers

  invalidResponse ++;
  // console.log('Invalid Responses: ' + invalidResponse);
  alert('You\'ve got to be kidding me, yes or no only, please!');
} else {
  invalidResponse ++;
  // console.log('Invalid Responses: ' + invalidResponse);
  alert('Please answer only with yes or no');
}


//Question 5-----------------------------------------------------------------------------------//


//define question, log answer to the console
let fifthAnswer = prompt('Alright, last one. Is my favorite movie genre comedy?').toLowerCase();
console.log('fifthAnswer: ' + fifthAnswer);


//if user answers any capitalization pattern of yes, no, y, or n response will be given for the corresponding step. For the correct step, the *Response variable will count by one.
if(fifthAnswer === 'yes' || fifthAnswer === 'y'){
  alert('Correct, my favorite movie is actually Dodgeball');
  correctResponse ++;
  // console.log('That\'s correct');
  // console.log('correctResponses: ' +correctResponse);
} else if (fifthAnswer === 'no' || fifthAnswer === 'n'){
  alert('No, my favorite genre actually is comedy, though I mostly watch kids movies these days');
  incorrectResponse ++;
  // console.log('That\'s incorrect');
  // console.log('incorrectResponses: ' +incorrectResponse);
} else if (invalidResponse >= 1){
//The user will get a sassy response if they continue answering with other than accepted answers

  invalidResponse ++;
  // console.log('invalidResponses: ' + invalidResponse);
  alert('I give up, no more questions, I just wanted a simple yes or no');
} else {
  invalidResponse ++;
  // console.log('invalidResponses: ' + invalidResponse);
  alert('That was the last one, but I was actually looking for a yes or no answer');
}

alert('Thanks for playing ' + username + '! I hope you know me a little better now');
console.log('correctResponses: ' + correctResponse); 
console.log('incorrectResponses: ' + incorrectResponse); 
console.log('invalidResponses: ' +invalidResponse);
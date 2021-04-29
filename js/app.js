'use strict';

// set counter for invalid responses, to give a more sassy response after the first time the user does it ;P
let invalidResponse = 0;

//get username, log to console, respond with welcome statement
let username = prompt('What is your name, pal?');
console.log('username: ' + username);
alert('Hi ' + username + ', welcome! Please answer the following questions about me with yes or no answers.');

//define first question, log answer to the console
let firstAnswer = prompt('Am I married? ').toLowerCase();
console.log('firstAnswer: ' + firstAnswer);

//if user answers and capitalization pattern of yes, no, y, or n it will follow this steps
if(firstAnswer === 'yes' || firstAnswer === 'y'){
  alert('I am! Hard to believe right?');
} else if (firstAnswer === 'no' || firstAnswer === 'n'){
  alert('I\'ve been married for almost 10 years, my wife\'s name is Aileen (eye-lean)');
} else {
//if the user types something other than the valid responses, it will initially respond with the correction, and add 1 to the invalidResponse variable to be used later
  invalidResponse ++;
  alert('Please answer only with yes or no');
  console.log('Invalid Responses: ' + invalidResponse);
}
//---------------------------------------------------------------------------------------------//


//asks second question and logs to console
let secondAnswer = prompt('Okay, that wasn\'t too terrible, was it? Let\'s do some more... do I have any kids?').toLowerCase();
console.log('secondAnswer: ' + secondAnswer);


//follows logical progression and responds to yes or no entries accordingly
if(secondAnswer === 'yes' || secondAnswer === 'y'){
  alert('Shocking, but true!');
} else if (secondAnswer === 'no' || secondAnswer === 'n'){
  alert('Actually I do! 2 beautiful girls!');
} else if (invalidResponse >= 1) {
//here's where I started doing too much. this checks the variable invalidResponse, and if it's value is greater than or equal to 1 it gives a less polite response, increments invalidResponse by 1, and logs an invalid response to console
  invalidResponse ++;
  console.log('Invalid Responses: ' + invalidResponse);
  alert('Again?! Yes or no only!');
} else {
//this means it's the users first invalid response, I return the polite response, and log the invalidResponse
  invalidResponse ++;
  console.log('Invalid Responses: ' + invalidResponse);
  alert('Please answer only with yes or no');
}


//---------------------------------------------------------------------------------------------//


//q3 and console log
let thirdAnswer = prompt('Now that you\'ve learned about my family, let\'s learn about my career! Did I serve in the Army?').toLowerCase();
console.log('thirdAnswer: ' + thirdAnswer);

//same steps in responding to the user

if(thirdAnswer === 'no' || thirdAnswer === 'n'){
  alert('That\'s right, I was actually in the Air Force!');
} else if (thirdAnswer === 'yes' || thirdAnswer === 'y'){
  alert('Not the Army, but close, I was in the Air Force.');
} else if (invalidResponse >= 1) {
//this checks the variable invalidResponse, and if it's value is greater than or equal to 1 it gives a less polite response, increments invalidResponse
  invalidResponse ++;
  console.log('Invalid Responses: ' + invalidResponse);
  alert('Come on, you\'re killing me Smalls. Please only reply with yes or no');
} else {
//and a nice response for first time offenders, plus a log of invalidResponse
  invalidResponse ++;
  console.log('Invalid Responses: ' + invalidResponse);
  alert('Please answer only with yes or no');
}

//q4 and console log
let fourthAnswer = prompt('Since you know I was in the Air Force now, what do I do now? Do I work for Microsoft?').toLowerCase();
console.log('fourthAnswer: ' + fourthAnswer);


//follows logical progression and responds to yes or no entries accordingly
if(fourthAnswer === 'no' || fourthAnswer === 'n'){
  alert('That\'s true, I actually work for AWS');
} else if (fourthAnswer === 'yes' || fourthAnswer === 'y'){
  alert('I don\'t, but I have interviewed with them before');
} else if (invalidResponse >= 1){
//this checks the variable invalidResponse, and if it's value is greater than or equal to 1 it gives a less polite response, increments invalidResponse
  invalidResponse ++;
  console.log('Invalid Responses: ' + invalidResponse);
  alert('You\'ve got to be kidding me, yes or no only, please!');
} else {
//and a nice response for first time offenders and a count for invalidResposne
  invalidResponse ++;
  console.log('Invalid Responses: ' + invalidResponse);
  alert('Please answer only with yes or no');
}

//q5 and console log
let fifthAnswer = prompt('Alright, last one. Is my favorite movie genre comedy?').toLowerCase();
console.log('fifthAnswer: ' + fifthAnswer);


//follows logical progression and responds to yes or no entries accordingly
if(fifthAnswer === 'yes' || fifthAnswer === 'y'){
  alert('Correct, my favorite movie is actually Dodgeball');
} else if (fifthAnswer === 'no' || fifthAnswer === 'n'){
  alert('No, my favorite genre actually is comedy, though I mostly watch kids movies these days');
} else if (invalidResponse >= 1){
  invalidResponse ++;
  console.log('invalidResponses: ' + invalidResponse);
  alert('I give up, no more questions, I just wanted a simple yes or no');
} else {
  invalidResponse ++;
  console.log('invalidResponses: ' + invalidResponse);
  alert('That was the last one, but I was actually looking for a yes or no answer');
}

alert('Thanks for playing ' + username + '! I hope you know me a little better now');

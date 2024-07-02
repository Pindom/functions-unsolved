// FUNCTIONS: Basics
// BEFORE YOU START: please read the /exercises-info/e1.md file.
// NAMED FUNCTION SYNTAX: is described in /exercises-info/e4.md file.

/**
 * ====================================================
 * Create a function to work as follows:
  * The function name is 'logMessage' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a message in the console.
  * The function does NOT require any arguments.
 * Message to print: 'Hello, World!'
 * logMessage() => 'Hello, World!'
*/

// Your code goes here


function logMessage(par1, par2) {
  return par1 + ', ' + par2;
} 

let consoleMessage = logMessage('Hello','World!')

// console.log(consoleMessage);



/**
 * =============================================================
 * Create a function that works as follows:
  * The function name is 'logMyMessage' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a specific message in the console.
  * The message is a string value passed as an argument
 * Message example: 'I log my first message!'
 * logMyMessage('My message') => 'My message'
*/

// Your code goes here...

function logMyMessage(par1, par2, par3, par4, par5) {
  return par1 + par2 + par3 + par4 + par5;
}

let consoleMessage2 = logMyMessage ('I ' , 'log ' , 'my ' , 'first ' , 'message!');

// console.log(consoleMessage2);

/**
 * ===============================================================
 * Create a  function that works as follows:
  * The function name is 'logMessageWithMyName' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a message of 'My name is <name>!'.
  * The name is a string value passed as an argument
 * logMessageWithMyName('Andrey') => 'My name is Andrey!'
*/

// Your code goes here...

function logMessageWithMyName(nameInput) {
  return 'My name is ' + nameInput;
}

let nameLog = logMessageWithMyName('Alvaro');

// console.log(nameLog);


/**
 * ==============================================================
 * Create a function that works as follows:
  * the function name is 'logMyInfo' strictly.
  * The function MUST use NAMED function syntax.
  * The function of logs a message of 'My name is <name>. I am <age> years old!'.
  * The name is a string value passed as an argument.
  * The age is a number value passed as an argument.
 * logMyInfo('Andrey', 18) => 'My name is Andrey. I am 18 years old!'
*/

// Your code goes here...

function logMyInfo(firstName, age) {
  return 'My name is ' + firstName + '. ' + 'I am ' + age +' years old!'
}

let nameAndAge = logMyInfo('Alvaro', '26');

// console.log(nameAndAge);


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  logMessage: logMessage || undefined,
  logMyMessage: logMyMessage || undefined,
  logMessageWithMyName: logMessageWithMyName || undefined,
  logMyInfo: logMyInfo || undefined
}

 export { f };

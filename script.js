/*
Wow, look mom, I am learning to code!

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge)

var job;
console.log(job)

job = 'Teacher'
console.log(job)
*/

// I am skipping var errors, because FU

/*
Variable mutations and coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type COersion
console.log(firstName + ' ' + age)

var job, isMarried;
job = 'Teacher'
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old' + job + '. Is he married? ' + isMarried)

// Variable muation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)

*/

/* BASIC JS OPERATORS */
/********************

var year, yearJohn, yearMark, ageMark, ageJohn;
now = 2018;
ageMark = 28
ageJohn = 33


yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now+2)
console.log(now*2)
console.log(now/10)

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// Typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);

*/

/* Operator Precedence */
/*******************


var now, yearJohn, fullAge;
now = 2018;
yearJohn = 1985;
fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge)

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

*/

/* CODING CHALLENGE */
/********************


var johnHeight, johnWeight, markHeight, markWeight, johnBmi, markBmi;


johnHeight = prompt ('What is Johns Height?');
johnWeight = prompt ('Johns Weight?');
markHeight = prompt ('Marks Hight?');
markWeight = prompt ('Marks weight');

johnBmi = johnWeight / (markHeight*markHeight);
markBmi = markWeight / (markHeight*markHeight);

console.log('Johns BMI is:' + johnBmi);
console.log('Marks BMI is:' + markBmi);

var bmiDif = johnBmi > markBmi;

console.log('Is Johns BMI higher than Marks? ' + bmiDif)


/* If / ELSE Statements */
/************************

var name = 'John';
var status = 'single';
 
var isMarried = true;


if (isMarried) {
    console.log(name + ' is married');
} else {
    console.log(name + ' is NOT married!');
}

*/

/*BMI COMPARISON */
/******************

var johnHeight, johnWeight, markHeight, markWeight, johnBmi, markBmi;


johnHeight = prompt ('What is Johns Height?');
johnWeight = prompt ('Johns Weight?');
markHeight = prompt ('Marks Hight?');
markWeight = prompt ('Marks weight');

johnBmi = johnWeight / (markHeight*markHeight);
markBmi = markWeight / (markHeight*markHeight);

console.log('Johns BMI is:' + johnBmi);
console.log('Marks BMI is:' + markBmi);

var bmiDif = johnBmi > markBmi;

if (bmiDif) {
    console.log('John is more fat than Mark');
} else {
    console.log('John is not fat, but mark is!');
}


if (johnBmi < 20){
    console.log('John is not fat.');
} else if (johnBmi >= 20 && johnBmi < 30) {
    console.log('John could use a diet');
} else {
    console.log('John is overweight');
}

*/

/* Ternary Operator and Switch statements */
/****************************************


var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' Drinks beer') : console.log(firstName + ' drinks Juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log (firstName + ' drinks ' + drink);

/*


/*BMI COMPARISON WITH SWITHCES */
/******************

var johnHeight, johnWeight, markHeight, markWeight, johnBmi, markBmi;


johnHeight = prompt ('What is Johns Height?');
johnWeight = prompt ('Johns Weight?');
markHeight = prompt ('Marks Hight?');
markWeight = prompt ('Marks weight');

johnBmi = johnWeight / (markHeight*markHeight);
markBmi = markWeight / (markHeight*markHeight);

console.log('Johns BMI is:' + johnBmi);
console.log('Marks BMI is:' + markBmi);

var bmiDif = johnBmi > markBmi;

if (bmiDif) {
    console.log('John is more fat than Mark');
} else {
    console.log('John is not fat, but mark is!');
}


switch (true) {
    case johnBmi < 20:
    console.log('John is not fat.');
    break;
    
    case johnBmi >= 20 && johnBmi < 30:
    console.log('John could use a diet');
    break;
    
    case johnBmi >= 30:
    console.log('John is overweight');
}


*/


/* Average score calculator 


// Variables
var team1, team2, team3, t1g1, t1g2, t1g3, t2g1, t2g2, t2g3, t3g1, t3g2, t3g3;


//Team 1 score
t1g1 = Number (prompt ('Team 1 - Score of game 1 was?'));
t1g2 = Number (prompt('Team 1 - Score of game 2 was?'));
t1g3 = Number (prompt('Team 1 - Score of game 3 was?'));

team1 = (t1g1 + t1g2 + t1g3) / 3;

console.log ('Team 1 average score is: ' + team1);

//Team 2 score
t2g1 = Number (prompt ('Team 2 - Score of game 1 was?'));
t2g2 = Number (prompt('Team 2 - Score of game 2 was?'));
t2g3 = Number (prompt('Team 2 - Score of game 3 was?'));

team2 = (t2g1 + t2g2 + t2g3) / 3;

console.log ('Team 2 average score is: ' + team2);

//Team 3 score
t3g1 = Number (prompt ('Team 3 - Score of game 1 was?'));
t3g2 = Number (prompt('Team 3 - Score of game 2 was?'));
t3g3 = Number (prompt('Team 3 - Score of game 3 was?'));

team3 = (t3g1 + t3g2 + t3g3) / 3;

console.log ('Team 3 average score is: ' + team3);

// Comparison

switch (true) {
    case team1 > team2 || team3 :
    console.log('Team 1 has the highest average of: ' + team1 );
    break;
        
    case team2 > team1 || team3 :
    console.log('Team 2 has the highest average of: ' + team2 );
    break;
        
    case team3 > team1 || team2 :
    console.log('Team 3 has the highest average of: ' + team3 );
    break;
    
    default: console.log('Teams are tied.');
}

*/

/* FUNCTIONS */

var age = function (birth){
    return 2018 - birth;
}



console.log
































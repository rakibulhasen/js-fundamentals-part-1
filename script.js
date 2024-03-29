/* console.log("Hello, World!");
console.log("Ajke amar mon valo ase!");

// variables
// let name = "Shohan";
let number = 20;
let temperature = 38;
let device = "Desktop";

console.log(temperature);

// variable naming convention (camel case)
let herName = "Nishi Konna";
let myBikeBrand = "Suzuki";
let firstName = "Tanisha";
let lastName = "Tanvin";
let ramFrequencyInTimeOverTorqueSpeed = 3200;
let herBikeName = "Kawasaki";
let boy_captain = "Sadril";
let girl_captain = "Rekha";
let YOUR_MONITOR_PRICE = 15000;
let $unknown_girl_name = "unknown";
let PI = 3.1416;

// let 10mafia_name = 'daku';
// let bf&gf = 'unknown';
// let new-number = 100;
// let new = 10;
// let true = 10;
// let false = 20;
// let function = 10;
// let let = 30;
// let Person = "Puzon";
// let bike1 = "Suzuki";
// let bike2 = "Kawasaki";

console.log(firstName);
// console.log(name); */

/*
 data types: object or primitive
 primitive data types:
 1. number (integer, floating)
 2. string
 3. boolean
 4. undefined
 5. null
 6. symbol
 7. bigInt

 value has type, not variable
*/

/* let movieRating = 7.8;
let movieName = "inception";
let isRaining = false;
let isSheCute = true;
let isMarried = false;
let isJavaScriptFun;

console.log(typeof movieRating);
console.log(typeof movieName);
console.log(typeof isRaining);
console.log(typeof isSheCute);
console.log(typeof isJavaScriptFun);

// re-assign or mutate
isJavaScriptFun = true;
console.log(typeof isJavaScriptFun);

// re-assign
isJavaScriptFun = 80;
console.log(typeof isJavaScriptFun);

let carSpeed = null;
console.log(typeof carSpeed);

// null isn't an object, it's a bug

let age = 30; // declareing a variable using let keyword
age = 31; // re-assign or mutate
age = 50;

const birthYear = 1720; // decaring a variable using const keyword */
/* birthYear = 1800; // re-assign not possible in a constant variable */

/* // never use var
var planMasterName = "Mr. X";
planMasterName = "Mr. Y";

// never use without keyword
fatFriendName = "Janina";
console.log(fatFriendName);

const myLocation = "Dhaka";
const distance = 235;
console.log(myLocation);
console.log(distance);
console.log(typeof distance);
 */

/* // math operations
const currentYear = 2022;
const ageTumpa = currentYear - 1998; //26
const ageRahat = currentYear - 1998; //26

console.log(ageTumpa, ageRahat);

console.log(ageTumpa * 2);
console.log(ageTumpa / 2);
console.log(ageTumpa ** 2); //2 to the power of 24 (24^2)

const firstName = "Afia Binte";
const lastName = "Ayesha";

console.log(firstName + " " + lastName);

const bikeBrand = "Yamaha";
const bikeModel = "MT15";
const fullBikeName = bikeBrand + " " + bikeModel;
// console.log(bikeBrand + " " + bikeModel);
console.log(fullBikeName);

// assignment operators
let number = 20 + 10; // 30
// number = number + 15;
number += 15; // 45
number -= 10; // 35
// number += 1;
number++; // adds only 1
// number -= 1;
number--; // minus only 1

console.log(number);

// comaparison operators (>, <, >=, <=)
console.log(ageTumpa <= ageRahat);

// oprator precedence
console.log(2022 > 2002 + 16);
console.log(20 + (10 + 20) * 2);

// template literals
const nameTumpa = "Tumpa";
const tumpaAge = 26;
const jobTumpa = "prgrammer";
// const bioTumpa =
//   "My name is " +
//   nameTumpa +
//   ", " +
//   tumpaAge +
//   " years old and I am a " +
//   jobTumpa +
//   ".";

const bioTumpa = `My name is ${nameTumpa}, ${tumpaAge} years old and I am a ${jobTumpa}.`; // back tick

console.log(bioTumpa);

// console.log("I am Shohan \n\
// and \n\
// I am a \n\
// developer");

console.log(`
Hello
I am Shohan
and
I 
am 
a
programmer
`);

// conditionals or control structure
const birthYear = 2012;

if (birthYear <= 1999) {
  console.log("You are a 90's kid! 😍");
} else {
  console.log("You are not a 90's kid! ☹️");
}

const bikeSpeed = 55;

if (bikeSpeed > 60) {
  console.log("You can not enter the Padma Bridge.");
} else {
  console.log("You can enter.");
}

const money = 300;
const pizzaPrice = 350;
const burgerPrice = 289;
const milkShake = 80;
const singaraPrice = 5;

if (money > pizzaPrice) {
  console.log("Pizza khabo");
} else if (money > burgerPrice) {
  console.log("Burger khabo");
} else if (money > milkShake) {
  console.log("Milk shake khabo");
} else if (money > singaraPrice) {
  console.log("Singara khabo");
} else {
  console.log("Pani khabo");
}

// grade calculation
const marks = 33;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else if (marks >= 50) {
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else if (marks >= 33) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// type conversion (manually) and coercion (automattically)
const inputYear = "Shohan";
console.log(inputYear + 10 + 20); // string + number + number
console.log(inputYear - 10); // string - number
//NaN not a number

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log("Baby" + 20);
console.log("Baby" - 20);
console.log("Baby" * 20);
console.log("Baby" / 20);
console.log("Baby" + " " + "Babu");
console.log("Baby" - " " - "Babu");
console.log(200 - "100");
console.log(200 * "100");
console.log(200 / "100");
console.log("200" + 100); // + and string thakle sobkisu string banabe

const testNumber = "200";
console.log(testNumber, typeof testNumber);
console.log(Number(testNumber));
console.log(Number("500.55"));
console.log(Number("Tanha"));

const testNumber2 = 200;
const currentKiGese = false;
console.log(testNumber2, typeof testNumber2);

console.log(String(testNumber2));
console.log(typeof currentKiGese);
console.log(typeof String(currentKiGese));

console.log(typeof NaN);

// game
let a = "1" + 1; //11
a -= 1;

let x = 2 + 3 + 4 + "5"; //955
x += 5;
console.log(x); // 955 100 19 23410 23455

let y = "10" - "5" - "3" - 2 + "5";
y -= 10;
console.log(y); //510 -5 13 5

let b = 1 + 1 - 1 - "1" + "10" - 20;
b += "10";
b--;
console.log(b); //1010 -1

let n = 1 - "1"; */

// truthy and falsy values
// falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//truthy
console.log(Boolean(1));
console.log(Boolean(" "));
console.log(Boolean({}));

let money = 10;

if (money) {
  console.log("I have money");
} else {
  console.log("I have no money");
}

// equality operators
/*
=, assign
== or ===, equality
!= or !==, not equal
*/

const age = "21";

if (age == 21) {
  // js does type coercion, not-strict
  console.log("You are an adult.");
} else {
  console.log("You are too young.");
}

if (age === 21) {
  // js doesn't type coercion, strict
  console.log("You are an adult.");
} else {
  console.log("You are too young.");
}

// const favouriteNumber = Number(prompt("What's your favourite number?"));
// console.log(favouriteNumber);

// nested conditions
const testAge = 18;
const testNID = true;
const testBirthReg = false;
const testPassport = true;

if (testAge === 18) {
  if (testNID) {
    if (testPassport) {
      console.log(`Your age: ${testAge}, applicable for this job. 💯`);
    }
  }
} else if (testAge !== 18) {
  if (testBirthReg) {
    console.log(
      `Your age: ${testAge}, and you're not applicable for this job. But you can apply later for NID and Passport. `
    );
  }
}

// and , or (&&, ||)
const savedMoney = 150000;
const ownHouse = true;
const hasBusiness = false;

if ((ownHouse && savedMoney >= 200000) || hasBusiness) {
  console.log("Tahole tomar biya hobe na.");
} else {
  console.log("Tahole tomar biya hobe na.");
}

const pocketMoney = 200;
const timeLeft = 5;

if (pocketMoney >= 100 || timeLeft >= 6) {
  console.log("Burger khaite parben");
} else {
  console.log("Parben na");
}

// leap year testing
/*
year % 400 === 0
year % 4 === 0 && year % 100 !== 0
*/

let year = "asgfjsdg";

if (typeof year === "number") {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
} else {
  console.log("Enter a valid year.");
}

// switch case statements
const day = "thursday";

switch (day) {
  case "saturday": // day === "saturday"
    console.log("No class!");
    break;
  case "sunday":
    console.log("Class ase!");
    break;
  case "monday":
    console.log("No class!");
    break;
  case "tuesday":
  case "wednesday":
    console.log("No class!");
    break;
  case "thursday":
  case "friday":
    console.log("Class ase!");
    break;
  default:
    console.log("Not a valid day!");
}

// statement and expression
// expression can produce values
// statement can't produce values, only manupulates expression

const text = "23 is bigger number.";
const text2 = "23 is not bigger number.";

if (23 > 30) {
  console.log(text);
} else {
  console.log(text2);
}

// ternary operator
let yourNumber = 150;

if (yourNumber < 50) {
  console.log("Your number is big!");
} else {
  console.log("Your number is not big");
}

if (yourNumber < 50) console.log("Your number is big!");
else console.log("Your number is not big");

yourNumber > 50
  ? console.log("Your number is big!")
  : console.log("Your number is not big");

yourNumber === 100 ? (yourNumber += 100) : (yourNumber -= 100);
console.log(yourNumber);

const a = 5;
const b = 10;
let c;

a > b ? (c = a + b) : (c = b - a);
console.log(c);



// 2. Traffic Light
let trafficLight = "green" ;
switch(trafficLight){
    case "red" : console.log("stop"); break;
    case "yellow" : console.log("wait"); break;
    case "green" : console.log("go"); break;
    default : console.log("no signal"); break;
}

// 3. Grade Checker
let gradePoint = "A" ;
switch(gradePoint){
    case "A" : console.log("excellent"); break;
    case "B" : console.log("good"); break;
    case "C" : console.log("fair"); break;
    case "D" : console.log("poor"); break;
    case "F" : console.log("fail"); break;
    default : console.log("excellent"); break;
}

// 4. Fruit Type
let fruitType = "berry";
switch (fruitType) {
    case "apple":
    case "mango":
    case "banana":
    case "berry":
        console.log(`${fruitType} is yummyyyyyy`)
        break;

    default:
        console.log("it's not fruit")
        break;
}

// 5. Simple Calculator
let firstNumber = 5; 
let lastNumber = 4 ; 
let calculatingOperator = "*";
switch (calculatingOperator) {
    case "+":
        console.log(firstNumber + lastNumber)
        break;
    case "-":
        console.log(firstNumber - lastNumber)
        break;
    case "*":
        console.log(firstNumber * lastNumber)
        break;
    case "/":
        console.log(firstNumber / lastNumber)
        break;

    default:
        console.log("Invalid operator")
        break;
}

// month days:
let month = "march";
switch (month) {
    case "march":
    case "may":
    case "june":
    case "september":
    case "november":
        console.log("this month has 30 days.")
        break;
    case "february":
        console.log("this month has 28 or 29 days.")
        break;

    default:
        console.log("this month has 31 days.")
        break;
}
// Week Type (Weekend or Weekday):

let weekday = "saturday";

switch (weekday) {
    case "friday":
    case "saturday":
        console.log("hurray it's weekend")
        break;

    default:
        console.log("oh it's work day")
        break;
}

// Number to Word:

let number = "4";
switch (number) {
    case 1:
        console.log("one")
        break;
    case 2:
        console.log("two")
        break;
    case 3:
        console.log("three")
        break;
    case 4:
        console.log("four")
        break;
    case 5:
        console.log("five")
        break;

    default:
        console.log("out of range")
        break;
}

//  Character Type (Vowel or Consonant):
let character = "a";

switch (character) {
    case "a":
    case "e":
    case "o":
    case "i":
    case "u":
        console.log("it's a vowel.")
        break;

    default:
        console.log("it's a consonant")
        break;
}

// Currency Converter:

let currency = "usd";
let amount = "1";

switch (currency) {
    case "usd":
        
        break;

    default:
        break;
}


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
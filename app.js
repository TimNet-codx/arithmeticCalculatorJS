const num1 = parseFloat(prompt("Enter number1:  ")); 
const num2 = parseFloat(prompt("Enter number2:  ")); 

const operator = prompt("Enter operator (+, -, /, *)");

let result = 0;
if (isNaN(num1) || isNaN(num2)) {
    alert("Wrong Input !!!")
} else {
    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "/") {
        result = num1 / num2;
    } else if (operator == "*") {
        result = num1 * num2;
    }
}
   alert(result)

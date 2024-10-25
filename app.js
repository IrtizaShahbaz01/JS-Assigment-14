// Question 01
// function showDateTime() {
//     var now = new Date();
//     document.write(now);
// }
// showDateTime();

// Question 02
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     document.write("Hello, " + fullName + "!");
// }
// greetUser("Ali", "Khan");

// Question 03
// function addNumbers(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
// }
// document.write(addNumbers(5, 10));

// Question 04
// function calculator(num1, num2, operator) {
//     let result;
//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         result = num1 / num2;
//     }
//     document.write("Result: " + result);
// }
// calculator(10, 5, '+');


// Question 05
// function square(num) {
//     return num * num;
// }
// document.write(square(4));

// Question 06
// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// document.write(factorial(5));

//Question 07
// function displayCounting(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + " ");
//     }
// }
// displayCounting(1, 10);

// Question 08
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     document.write("Hypotenuse: " + hypotenuse);
// }
// calculateHypotenuse(3, 4);

// Question 09
// function calculateArea(width, height) {
//     return width * height;
// }
// document.write("Area: " + calculateArea(5, 10));
// var w = 6;
// var h = 8;
// document.write("<br>Area: " + calculateArea(w, h));

// Question 10
// function isPalindrome(str) {
//     var reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }
// document.write(isPalindrome("madam"));

// Question 11
// function capitalizeFirstLetter(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// document.write(capitalizeFirstLetter('the quick brown fox'));

// Question 12
// function findLongestWord(str) {
//     var words = str.split(' ');
//     let longestWord = words[0];
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// document.write(findLongestWord('Web Development Tutorial'));

// Question 13
// function countLetter(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// document.write(countLetter('JSResourceS.com', 'o'));

// Question 14
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference + "<br>");
// }
// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     document.write("The area is " + area);
// }
// calcCircumference(5);
// calcArea(5);

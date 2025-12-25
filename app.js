var firstName = prompt("Q1: Enter first name");
var lastName = prompt("Q1: Enter last name");
var fullName = firstName + " " + lastName;
document.write("<h3>Q1</h3>");
document.write("Full Name: " + fullName + "<br><hr>");

var mobile = prompt("Q2: Enter your favorite mobile phone");
document.write("<h3>Q2</h3>");
document.write("My favorite phone is: " + mobile + "<br>");
document.write("Length of string: " + mobile.length + "<br><hr>");


var word1 = "Pakistani";
document.write("<h3>Q3</h3>");
document.write("String: " + word1 + "<br>");
document.write("Index of 'n': " + word1.indexOf("n") + "<br><hr>");

var text1 = "Hello World";
document.write("<h3>Q4</h3>");
document.write("String: " + text1 + "<br>");
document.write("Last index of 'l': " + text1.lastIndexOf("l") + "<br><hr>");

document.write("<h3>Q5</h3>");
document.write("String: " + word1 + "<br>");
document.write("Character at index 3: " + word1.charAt(3) + "<br><hr>");

var fullName2 = firstName.concat(" ", lastName);
document.write("<h3>Q6</h3>");
document.write("Full Name using concat(): " + fullName2 + "<br><hr>");

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("<h3>Q7</h3>");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br><hr>");

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMsg = message.replace(/and/g, "&");
document.write("<h3>Q8</h3>");
document.write(replacedMsg + "<br><hr>");

var str = "472";
var num = Number(str);
document.write("<h3>Q9</h3>");
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br><hr>");

var inputUpper = prompt("Q10: Enter text for Upper Case");
document.write("<h3>Q10</h3>");
document.write("User input: " + inputUpper + "<br>");
document.write("Upper case: " + inputUpper.toUpperCase() + "<br><hr>");

var inputTitle = prompt("Q11: Enter text for Title Case");
var titleCase = inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1);
document.write("<h3>Q11</h3>");
document.write("User input: " + inputTitle + "<br>");
document.write("Title case: " + titleCase + "<br><hr>");

var num2 = 35.36;
var resultNum = num2.toString().replace(".", "");
document.write("<h3>Q12</h3>");
document.write("Number: " + num2 + "<br>");
document.write("Result: " + resultNum + "<br><hr>");

var username = prompt("Q13: Enter username");
var invalid = false;

for (var i = 0; i < username.length; i++) {
  var code = username.charCodeAt(i);
  if (code === 33 || code === 44 || code === 46 || code === 64) {
    invalid = true;
    break;
  }
}
document.write("<h3>Q13</h3>");
if (invalid) {
  document.write("Please enter a valid username<br><hr>");
} else {
  document.write("Username is valid<br><hr>");
}

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Q14: Welcome to ABC Bakery. What do you want?").toLowerCase();
var foundIndex = bakeryItems.indexOf(searchItem);

document.write("<h3>Q14</h3>");
if (foundIndex !== -1) {
  document.write(searchItem + " is available at index " + foundIndex + "<br><hr>");
} else {
  document.write("We are sorry. " + searchItem + " is not available<br><hr>");
}

var password = prompt("Q15: Enter password");
document.write("<h3>Q15</h3>");

if (password.length < 6) {
  document.write("Password must be at least 6 characters<br><hr>");
} else if (!isNaN(password.charAt(0))) {
  document.write("Password cannot start with a number<br><hr>");
} else {
  document.write("Password is valid<br><hr>");
}

var university = "University of Karachi";
var uniArray = university.split("");
document.write("<h3>Q16</h3>");
for (var i = 0; i < uniArray.length; i++) {
  document.write(uniArray[i] + "<br>");
}
document.write("<hr>");

var lastCharInput = prompt("Q17: Enter any text");
document.write("<h3>Q17</h3>");
document.write("User input: " + lastCharInput + "<br>");
document.write("Last character: " + lastCharInput.charAt(lastCharInput.length - 1) + "<br><hr>");

var sentence = "The quick brown fox jumps over the lazy dog";
var countThe = sentence.toLowerCase().split("the").length - 1;
document.write("<h3>Q18</h3>");
document.write("Text: " + sentence + "<br>");
document.write("There are " + countThe + " occurrence(s) of word 'the'<br><hr>")
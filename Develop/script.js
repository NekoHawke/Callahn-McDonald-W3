// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("generate");
var passwordInput = document.getElementById("password");
var modalElem = document.querySelector(".modal");
var submitBtn = document.getElementById("submit");
var passwordForm = document.getElementById("password-generator-options");
var passwordLengthInput = document.getElementById("passwordLength");
var uppercaseInput = document.getElementById("uppercase");
var lowercaseInput = document.getElementById("lowercase");
var nums_specialInput = document.getElementById("nums_special");
var uppercase, lowercase, special, numbers, length;
var uppercaseLettersArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var lowercaseLettersArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArray = [
  '!',
  '#',
  '$',
  '%',
  '&',
  '(',
  ')',
  '*',
  '+',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
];





// Write password to the #password input
function generatePassword() {
  length = parseInt(window.prompt("how many characters would you like your password to be choose between 8-128"))
  if (length < 7 || length > 128) {
    alert("not a valid response, refresh page and try again.")
  } else {
    lowercase = confirm("do you want to include lowercase letters?")
    uppercase = confirm("do you want to include uppercase letters?")
    special = confirm("do you want to include special characters?")
    numbers = confirm("do you want to include numbers?")

    var possiblePasswordArray = []
    var password = []
    if (lowercase) {
      possiblePasswordArray = possiblePasswordArray.concat(lowercaseLettersArray)

    }
    if (uppercase) {
      possiblePasswordArray = possiblePasswordArray.concat(uppercaseLettersArray)

    }
    if (numbers) {
      possiblePasswordArray = possiblePasswordArray.concat(numbersArray)

    }
    if (special) {
      possiblePasswordArray = possiblePasswordArray.concat(specialCharactersArray)

    }
    var password = ""
    for (var i = 0; i < length; i++) {
      password += (possiblePasswordArray[Math.floor(Math.random() * possiblePasswordArray.length)])
    }
    return password


  }


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};
// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// passwordForm.addEventListener('submit', function(event){
//   event.preventDefault();
//   modalElem.style.display = "none";
//   generatePassword();
// });
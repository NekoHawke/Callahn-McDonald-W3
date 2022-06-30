// Assignment code here


// Get references to the #generate element
// DOM Cache
const generateBtn = document.getElementById("generate");
const passwordInput = document.getElementById("password");

// Chars arrays
const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];

// Write password to the #password input
const generatePassword = () => {
  const passwordLengthInput = window.prompt(
    "how many characters would you like your password to be choose between 8-128"
  );
  const passwordLength = parseInt(passwordLengthInput, 10);
  const invalidPasswordLength = passwordLength < 8 || passwordLength > 128;
  let password = "";

  if (isNaN(passwordLength) || invalidPasswordLength) {
    alert("Invalid input! Password must be between 8 and 128 characters.");
  } else {
    const lowercase = confirm("Do you want to include lowercase letters?");
    const uppercase = confirm("Do you want to include uppercase letters?");
    const special = confirm("Do you want to include special characters?");
    const numbers = confirm("Do you want to include numbers?");

    const chars = [].concat(
      lowercase ? lowercaseArray : [],
      uppercase ? uppercaseArray : [],
      numbers ? numbersArray : [],
      special ? specialArray : []
    );
    const charsLength = chars.length;

    for (var i = 0; i < passwordLengthInput; i++) {
      password += chars[
        Math.floor(Math.random() * charsLength)
      ];
    }
  }

  return password;
};

// Event listener to generate button
generateBtn.addEventListener("click", () => {
  passwordInput.value = generatePassword();
});
// passwordForm.addEventListener('submit', function(event){
//   event.preventDefault();
//   modalElem.style.display = "none";
//   generatePassword();
// });
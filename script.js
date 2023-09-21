// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("A password must contain uppercase, lowercase, numbers and special characters.")
var length = parseInt (prompt("Enter password length from 8 to 128 characters"));
// what could we use instead of parseInt
if (length < 8 || length > 128) {
    // if (length < 8) {
  //   alert("Password must be greater than 8 characters!")
  // } else if (length > 128) {
  //   alert("Password must be less than 129!")
  //   return
  // }
  alert("Invalid length");
  return; 
}
}

var lowercaseChars = confirm("Do you want to include lower case characters?")
var uppercaseChars = confirm("Do you want to include uppercase characters?")
var numberChars = confirm("Do you want to include numbers?")
var specialChars = confirm("Do you want to include special characters?")


if (!(lowercaseChars || uppercase || numeric || special )) {
  alert("Please select at least one character type for your password");
  return;
}
// if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
//   alert('You must choose at least one type of character for your password.');
//   return;

var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChars = '0123456789';
var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

var allChars 








//   return "Generated Password";
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




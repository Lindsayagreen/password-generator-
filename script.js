// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("A password must contain uppercase, lowercase, numbers and special characters.")
var passWordlength = parseInt (prompt("Enter password length from 8 to 128 characters"));
// what could we use instead of parseInt
if (passWordlength < 8 || passWordlength > 128) {
    // if (length < 8) {
  //   alert("Password must be greater than 8 characters!")
  // } else if (length > 128) {
  //   alert("Password must be less than 129!")
  //   return
  // }
  alert("Invalid length");
  return; 
}


var useLowercaseChars = confirm("Do you want to include lower case characters?")
var useUppercaseChars = confirm("Do you want to include uppercase characters?")
var usenumberChars = confirm("Do you want to include numbers?")
var useSpecialchars = confirm("Do you want to include special characters?")


if (!(uselowercaseChars || useuppercaseChars || usenumberChars || usespecialChars)) {
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

// var allChars= ''
// // what does this mean and do?

var allChars = lowercaseChars + uppercaseChars + numberChars + specialChars

// if (useLowercaseChars) 
//     allChars += lowercaseChars;
// if (useUppercaseChars) 
//     allChars += uppercaseChars;
// if (useNumberChar) 
//     allChars += numberChars;
// if (useSpecialchars) 
//     allChars += specialChars;

//what the hell does this mean?

var generatedPassword = '';

  for (var i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.passWordlength);
    generatedPassword += allChars[randomIndex];
//what the hell does this mean?

}




}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




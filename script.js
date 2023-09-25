// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("A password must contain uppercase, lowercase, numbers and special characters.");
  var passwordlength = parseInt(prompt("Please choose a password length between 8 and 128"));
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Please enter a numbered length for your password between 8 and 128 please.");
    return;
  }

  // if (length < 8) {
  //   alert("Password must be greater than 8 characters!")
  // } else if (length > 128) {
  //   alert("Password must be less than 129!")
  //   return
  // }
  // alert("Invalid length");
  // return;

  var useLowercaseChars = confirm("Do you want to include lower case characters?")
  var useUppercaseChars = confirm("Do you want to include uppercase characters?")
  var usenumberChars = confirm("Do you want to include numbers?")
  var useSpecialchars = confirm("Do you want to include special characters?")

  console.log(useLowercaseChars, useUppercaseChars, usenumberChars, useSpecialchars)

  if (!useLowercaseChars && !useUppercaseChars && !usenumberChars && !useSpecialchars) {
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

  var allChars = ''
  console.log(allChars)
  if (useLowercaseChars)
    allChars += lowercaseChars;
  if (useUppercaseChars)
    allChars += uppercaseChars;
  if (usenumberChars)
    allChars += numberChars;
  if (useSpecialchars)
    allChars += specialChars;
  console.log(allChars)


  var createdPassword = '';

  for (var i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    createdPassword += allChars[randomIndex];
  }
  console.log(creat)
  return createdPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
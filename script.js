// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//function logic to generate a random password based on user acceptance criteria
function generatePassword() {
  //sets variables to include all password character options
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"";

  //sets variables to include/not include in generated password
  var useLowercase = confirm("Use lowercase letters in the password?");
  var useUppercase = confirm("Use Uppercase letters in the password?");
  var useNumbers = confirm("Use numbers in the password?");
  var useSpecialCharacters = confirm("Use special characters in the password?");


  //sets an empty array for password variable
  var password = [];
  
  //variable created for overall character string based on prompt selections
  var totalPasswordCharacters;
  
  //sets password length via prompt
  var passwordLength = prompt("Password length? (8-128 chartacters allowed)");

  //Password must be 8 to 128 characters in length
  //Must choose at least one confirm for available password characters
  //if statements for determining totalPasswordCharacters string
  if(passwordLength < 8 || passwordLength > 128) {
    alert('You must choose between 8 and 128 characters!');
  } else if (!useLowercase && !useUppercase && !useNumbers && !useSpecialCharacters) {
    alert('You must choose at least 1 option to include in password!');
  } else if (useLowercase && useUppercase && useSpecialCharacters) {
    totalPasswordCharacters = lowercase.concat(uppercase, numbers, specialCharacters);
  } else if (useLowercase && useNumbers && useSpecialCharacters) {
    totalPasswordCharacters = lowercase.concat(numbers, specialCharacters);
  } else if (useLowercase && useUppercase && useSpecialCharacters) {
    totalPasswordCharacters = lowercase.concat(uppercase, specialCharacters);
  } else if (useLowercase && useUppercase && useNumbers) {
    totalPasswordCharacters = lowercase.concat(uppercase, numbers);
  } else if (useUppercase && useLowercase) {
    totalPasswordCharacters = uppercase.concat(lowercase);
  } else if (useUppercase && useNumbers) {
    totalPasswordCharacters = uppercase.concat(numbers);
  } else if (useUppercase && useSpecialCharacters) {
    totalPasswordCharacters = uppercase.concat(specialCharacters)
  } else if (useLowercase && useNumbers) {
    totalPasswordCharacters = lowercase.concat(numbers);  
  } else if (useLowercase) {
    totalPasswordCharacters = lowercase;
  } else if (useUppercase) {
    totalPasswordCharacters = uppercase;
  } else if (useNumbers) {
    totalPasswordCharacters = numbers;
  } else if (useSpecialCharacters) {
    totalPasswordCharacters = specialCharacters;
  } else {
    alert("Something went wrong! Try again.");
  }

    //for loop to generate random number and then switch with character string element numbers
    for(var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * totalPasswordCharacters.length);
      password += totalPasswordCharacters.substring(randomNumber, randomNumber +1);
    }
//pass in the generated password to writePassword function to display in html page
  writePassword(password);
}

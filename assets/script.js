var howMany;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//password variables
// Special characters 
let char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lowercase characters
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase characters
let upper = ["A", "B", "C", "D", "E", "F", "G" , "H", "I" , "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X" ,"Y", "Z"];

//start function to generate pw
function generatePassword() {

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    howMany = prompt("How many charachters does your password require?  Enter a number between 8 and 128.");
        if (!howMany){
            alert("This needs a value!!");
        }
        else if (howMany < 8 ||howMany>128) {
        howMany=    alert("Pick a number between 8 and 128");
        }
        else {
           confirmNumber= confirm("Will this contain numbers?");
           confirmCharacter= confirm("Will this containg special charachters?");
           confirmLowercase= confirm("Are lowercase letters required?");
           confirmUppercase= confirm("Are uppercase letters required?");
        };          
if      (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase){
            criteria = alert("YOU MUST INPUT REQUIREMENTS!!!");
    }
else if     (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase){
            criteria = [char, upper, lower, number];
}
else if     (confirmNumber && confirmCharacter && confirmUppercase){
            criteria = [number, char, upper];
}
else if     (confirmNumber && confirmCharacter){
            criteria = [number, char];
}   
else if     (confirmNumber){
            criteria = [number];
}
else if     (confirmCharacter && confirmLowercase && confirmUppercase){
            criteria = [char, upper, lower];
}
else if      (confirmCharacter && confirmLowercase){
            criteria = [char, lower];
}
else if     (confirmCharacter){
            criteria = [char];
}
else if     (confirmLowercase && confirmUppercase){
            criteria = [lower, upper];
}
else if     (confirmUppercase){
            criteria = [upper];
}
else if     (confirmLowercase){}
            criteria = [lower];
}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
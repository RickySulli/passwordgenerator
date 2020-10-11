var howMany;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//password variables
// Special characters 
let char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
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
        console.log(howMany,"" )
        }
        else {
            confirmNumber= confirm("Will this contain numbers?");
            confirmCharacter= confirm("Will this containg special charachters?");
            confirmLowercase= confirm("Are lowercase letters required?");
            confirmUppercase= confirm("Are uppercase letters required?");
            console.log(confirmNumber, confirmCharacter, confirmLowercase, confirmUppercase)
                };   
                     
if      (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase){
            alert("YOU MUST INPUT REQUIREMENTS!!!");
   
     }let criteria = [""];  
     if(confirmNumber=true){
         criteria += number;
     }
    
     if(confirmCharacter=true){
         criteria += char;
     }
     
     if (confirmLowercase=true){
         criteria += lower;
     }
     
     if (confirmUppercase=true){
         criteria += upper;
     }
     
var newpassword = ""
criteria = criteria.split(",");
for (var i = 0; i < howMany; i++){
 newpassword = newpassword + criteria[Math.floor(Math.random()* criteria.length)];
 console.log(newpassword);
}
var passwordText = document.querySelector("#password");

passwordText.value = newpassword;
}


 // var password = writePassword();
//console.log(password);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
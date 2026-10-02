// P: The question is basically asking for a number from 0-10 to be rounded up or down.
// E: If the number is 5 then it is now reassigned to 0 because the number is not greater than 5.
// D: The data type is number, and it doesn't change/stays the number data type.
// A: First, let the number variable be set to the number value of 5. 
// Then, if the number is less than 5, then reassign the variable titled "number" to have a value of 0. 
// After that, console log "THe number is now 0." Next, if the number is more than 5 then reassign the variable 
// titled "number" to have the value of 10. Finally, console log "The number is now 10."
// C: Coding time under there :D

let number = 5;
if(number < 5 && number >= 0){
    number = 0;
    console.log("The  number is now 0.")

}else if(number > 5 && number <= 10 ){
    number = 10;
    console.log("The number is now 10.")

}else if (number === 5){
    console.log("The number is now 5")
}else {
    number = NaN
     console.log("The number is now NaN.")
}
const inputField = document.getElementById("input-field");
const btnConvert = document.getElementById("btn-convert");
const outputLength = document.getElementById("output-length");
const outputVolume = document.getElementById("output-volume");
const outputMass = document.getElementById("output-mass");
// This variable will store the value of the input field when button is clicked
// or enter is pressed/ 
let valueInput = "";

// The following 3 variables are used to store the template strings
// needed to render the conversions to the page. 
let lengthConversion = "";
let volumeConversion = "";
let massConversion = "";


// this will calculate the length from meters to feet and the other way around.
// Then it will store the template string inside variable
// to be used to render to the page later. 
function convertLength(value){
    let meterstoFeet = value * 3.28084;
    let feetToMeters = value / 3.28084;
    lengthConversion = `${value} meters = ${meterstoFeet.toFixed(3)} feet | ${value} feet = ${feetToMeters.toFixed(3)} meters`;
}


// this will calculate the volume from liters to gallons and the other way around.
// Then it will store the template string inside variable
// to be used to render to the page later. 
function convertVolume(value){
    let litersToGallons = value * 0.264172;
    let gallonsToLiters = value / 0.264172;
    volumeConversion = `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`;
}


// this will calculate the mass from kilos to pounds and the other way around.
// Then it will store the template string inside variable
// to be used to render to the page later. 
function convertMass(value){
    let kilosToPounds = value * 2.20462262;
    let poundsToKilos = value / 2.20462262;
    massConversion = `${value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilos.toFixed(3)} kilos`;
}


// THis function will render all template strings to the page to show
// the user the conversion of the input he/she gave
function render(){
    outputLength.textContent = lengthConversion;
    outputVolume.textContent = volumeConversion;
    outputMass.textContent = massConversion;
    // This will clear the inputfield for a new input
    inputField.value = "";
}


// This puts an event listener on the convert button and if clicked it will execute the function. 
btnConvert.addEventListener("click", function(){
    // Value of input field will be stored inside variable
    valueInput = inputField.value;

    // You check if inputfield is not empty and if its a number. 
    if(!(isNaN(valueInput)) && !(valueInput === "")){
        // the 3 conversion functions will be called with the value of inputfield
        // as it's arguments to be used for the calculations. 
        convertLength(valueInput);
        convertVolume(valueInput);
        convertMass(valueInput);
    
        // Here the render function will be called to render all conversions to the page. 
        render();
    } 
    inputField.value = "";
})

// This puts an event listener on the inputfield and if enter is pressed it will execute the function. 
inputField.addEventListener("keypress", function(e){
    if (e.key === 'Enter') {
       // Value of input field will be stored inside variable
        valueInput = inputField.value;

        // You check if inputfield is not empty and if its a number. 
        if(!(isNaN(valueInput)) && !(valueInput === "")){
            // the 3 conversion functions will be called with the value of inputfield
            // as it's arguments to be used for the calculations. 
            convertLength(valueInput);
            convertVolume(valueInput);
            convertMass(valueInput);
        
            // Here the render function will be called to render all conversions to the page. 
            render();
        } 
        inputField.value = "";
    }
})
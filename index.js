const modeBtn = document.getElementById("btn-mode");
const inputField = document.querySelector(".input-field");
const btnConvert = document.getElementById("btn-convert");
const outputLength = document.getElementById("output-length");
const outputVolume = document.getElementById("output-volume");
const outputMass = document.getElementById("output-mass");
const conversionContainer = document.querySelector(".conversion-container");
const conversionSectionArray = document.getElementsByClassName("conversion-section");
const unitsTitleArray = document.getElementsByClassName("units-title");
const mainTitle = document.querySelector(".main-title");
const headerContainer = document.querySelector(".header-container");
const modeContainer = document.querySelector(".switch-mode-container");

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
function convertLength(value) {
    let meterstoFeet = value * 3.28084;
    let feetToMeters = value / 3.28084;
    lengthConversion = `${value} meters = ${meterstoFeet.toFixed(3)} feet | ${value} feet = ${feetToMeters.toFixed(3)} meters`;
}

// this will calculate the volume from liters to gallons and the other way around.
// Then it will store the template string inside variable
// to be used to render to the page later. 
function convertVolume(value) {
    let litersToGallons = value * 0.264172;
    let gallonsToLiters = value / 0.264172;
    volumeConversion = `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`;
}

// this will calculate the mass from kilos to pounds and the other way around.
// Then it will store the template string inside variable
// to be used to render to the page later. 
function convertMass(value) {
    let kilosToPounds = value * 2.20462262;
    let poundsToKilos = value / 2.20462262;
    massConversion = `${value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilos.toFixed(3)} kilos`;
}

// THis function will render all template strings to the page to show
// the user the conversion of the input he/she gave
function render() {
    outputLength.textContent = lengthConversion;
    outputVolume.textContent = volumeConversion;
    outputMass.textContent = massConversion;
    // This will clear the inputfield for a new input
    inputField.value = "";
}

function toggleMode() {

    // The below lines will toggle classes on of off when clicked. 
    conversionContainer.classList.toggle("mode-conv-container");
    headerContainer.classList.toggle("mode-container");
    modeContainer.classList.toggle("mode-container");
    inputField.classList.toggle("mode-input-field");
    mainTitle.classList.toggle("mode-light-text");
    btnConvert.classList.toggle("mode-btn-convert");
    outputLength.classList.toggle("mode-light-text");
    outputMass.classList.toggle("mode-light-text");
    outputVolume.classList.toggle("mode-light-text");

    // Need a for loop for these toggles since it has to toggle
    // multiple elements of same class in an array.n 
    for (let i = 0; i < conversionSectionArray.length; i++) {
        conversionSectionArray[i].classList.toggle("mode-conv-section");
    }
    for (let i = 0; i < unitsTitleArray.length; i++) {
        unitsTitleArray[i].classList.toggle("mode-units-title");
    }

    // This will add dark-mode to the button so it knows which
    // text it needs to render on the button when it executes
    // changeBtnName function.
    modeBtn.classList.toggle("dark-mode");
    changeBtnName();
}

function changeBtnName() {
    // This will check if modeBtn that is used to change between Dark and Light mode
    // contains the class "dark-mode" and switches text of button according whether
    // it's there or not. 
    if (modeBtn.classList.contains("dark-mode")) {
        modeBtn.innerText = "Switch to \r\n Light Mode";
    } else {
        modeBtn.innerText = "Switch to \r\n Dark Mode";
    }
}


// This puts an event listener on the Light/Dark mode button and executes the toggleMode function when clicked. 
modeBtn.addEventListener("click", toggleMode);

// This puts an event listener on the convert button and if clicked it will execute the function. 
btnConvert.addEventListener("click", function () {
    // Value of input field will be stored inside variable
    valueInput = inputField.value;

    // You check if inputfield is not empty and if its a number. 
    if (!(isNaN(valueInput)) && !(valueInput === "")) {
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
inputField.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        // Value of input field will be stored inside variable
        valueInput = inputField.value;

        // You check if inputfield is not empty and if its a number. 
        if (!(isNaN(valueInput)) && !(valueInput === "")) {
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
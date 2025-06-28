/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const mainSection = document.getElementById("main-sec")
const convertBtnEl = document.getElementById("convert-btn")
const outputLengthEl = document.getElementById("output-length")
const outputVolumeEl = document.getElementById("output-volume")
const outputMassEl = document.getElementById("output-mass")
const inputValueEl = document.getElementById("input-value")


convertBtnEl.addEventListener("click", function () {
    CalculateLength()
    CalculateVolume()
    CalculateMass()

})

function CalculateLength() {
    const inputValue = Number(inputValueEl.value)

    const feet = inputValue * 3.281 // meter → feet
    const meter = inputValue / 3.281  // feet → meter

    outputLengthEl.textContent = `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meter.toFixed(3)} meters`
}

function CalculateVolume() {
    const inputValue = Number(inputValueEl.value)

    const gallons = inputValue * 0.264172 // litre → gallons
    const litres = inputValue / 0.264172  // gallon → liter

    outputVolumeEl.textContent = `${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${litres.toFixed(3)} litres`
}

function CalculateMass() {
    const inputValue = Number(inputValueEl.value)

    const pounds = inputValue * 2.204 // kilos → pounds
    const kilos = inputValue / 2.204  // pounds → kilos

    outputMassEl.textContent = `${inputValue} kilos = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilos.toFixed(3)} kilos`
}

const resetBtnEl = document.getElementById("btn-reset")

function reset(){
    inputValueEl.value = 0
    outputLengthEl.textContent = ``
    outputVolumeEl.textContent = ``
    outputMassEl.textContent = ``
}

resetBtnEl.addEventListener("click", function(){
    reset()
})

const btnIconEl = document.getElementById("btn-icon")
const itemSection = document.getElementsByClassName("item")
const h2El = document.getElementsByClassName("section-title")
const descEl = document.getElementsByClassName("section-description")


function applyMode(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.remove("dark-mode")
    }
}

const savedMode = localStorage.getItem("darkMode");
applyMode(savedMode === "true");

btnIconEl.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark)
    applyMode(isDark)
})


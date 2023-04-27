const target = document.getElementById('latar')
const input = document.getElementById('inputWarna')
const ganti = document.getElementById('gantiWarna')
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const purple = document.getElementById('purple')

function gantiWarna() {
    target.style.backgroundColor = input.value
}

function gantiRed() {
    target.style.backgroundColor = red.value
}
function gantiGreen() {
    target.style.backgroundColor = green.value
}
function gantiBlue() {
    target.style.backgroundColor = blue.value
}
function gantiYellow() {
    target.style.backgroundColor = yellow.value
}
function gantiPurple() {
    target.style.backgroundColor = purple.value
}
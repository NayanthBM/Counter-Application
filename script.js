let count = 0
let passengers = document.getElementById("passcount")
let saveDisplay = document.getElementById("save-display")
function increment() {
    count = count + 1
    passengers.textContent = count
}

function save() {
    saveDisplay.textContent += count + " - "
    count = 0
    passengers.textContent = count
}








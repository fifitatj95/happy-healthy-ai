let calories = Number(localStorage.getItem("calories")) || 0;
let water = Number(localStorage.getItem("water")) || 0;
let sleep = Number(localStorage.getItem("sleep")) || 0;

document.getElementById("calorieDisplay").textContent = calories;
document.getElementById("waterDisplay").textContent = water;
document.getElementById("sleepDisplay").textContent = sleep;

function saveSleep() {
    sleep = Number(document.getElementById("sleepInput").value);
    localStorage.setItem("sleep", sleep);
    document.getElementById("sleepDisplay").textContent = sleep;
    document.getElementById("sleepInput").value = "";
}

function addCalories() {
    const value = Number(document.getElementById("calorieInput").value);

    if (!value) return;

    calories += value;
    localStorage.setItem("calories", calories);

    document.getElementById("calorieDisplay").textContent = calories;
    document.getElementById("calorieInput").value = "";
}

function addWater() {
    const value = Number(document.getElementById("waterInput").value);

    if (!value) return;

    water += value;
    localStorage.setItem("water", water);

    document.getElementById("waterDisplay").textContent = water;
    document.getElementById("waterInput").value = "";
}

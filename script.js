// Variables 
const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

// setGradient function is created to display color values within the h3
const gradient = (setGradient) => {
    body.style.background = "linear-gradient(to right, " + color1.value
        + ", "
        + color2.value
        + ")";

        h3.textContent = body.style.background + ";";
}

// Selects both color inputs and applies the gradient variable holding the setGradient function
color1.addEventListener("input", gradient);

color2.addEventListener("input", gradient);
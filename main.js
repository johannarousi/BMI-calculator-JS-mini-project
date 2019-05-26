const button = document.getElementById("calculate");
button.addEventListener("click", function() {
  calculateBMI();
});
let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
weight.setAttribute("placeholder", "Your Weight in Kilograms");
height.setAttribute("placeholder", "Your Height in Meters");
function calculateBMI() {
  let weight = weightInput.value;
  let height = heightInput.value;
  let bmi = Math.round(weight / (height * height));
  let message = "";
  let desc = document.getElementById("desc");

  if (bmi < 18.5) {
    message = "Underweight";
    document.getElementById("image").src = "assets/underweight.jpg";
    desc.style.backgroundColor = "#2a275e";
    desc.innerHTML = bmi + " " + message;
  } else if (bmi >= 18.5 && bmi < 25) {
    message = "Normal";
    document.getElementById("image").src = "assets/normal.jpg";
    desc.style.backgroundColor = "#89d79d";
    desc.innerHTML = bmi + " " + message;
  } else if (bmi >= 25 && bmi < 30) {
    message = "Overweight";
    document.getElementById("image").src = "assets/overweight.jpg";
    desc.style.backgroundColor = "#cc33ff";
    desc.innerHTML = bmi + " " + message;
  } else if (bmi >= 30) {
    message = "Obese";
    document.getElementById("image").src = "assets/obese.jpg";
    desc.style.backgroundColor = "#cc0066";
    desc.innerHTML = bmi + " " + message;
  }
}
let titleOne = document.getElementById("h1");
titleOne.style.color = "#89d79d";
titleOne.style.textAlign = "center";
titleOne.style.marginTop = "5%";

const titles = document.querySelectorAll("li");
console.log(titles);

titles.forEach((title, i) => {
  title.style.fontSize = "26px";
  title.style.listStyleType = "none";
  if (i === 0) {
    title.style.color = "#2a275e";
  } else if (i === 1) {
    title.style.color = "#89d79d";
  } else if (i === 2) {
    title.style.color = "#cc33ff";
  } else if (i === 3) {
    title.style.color = "#cc0066";
  }
});

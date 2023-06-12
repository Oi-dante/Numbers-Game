const lessValue = 0
const moreValue = 100
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * 100)
}

const elementLessValue = document.getElementById('less-value')
elementLessValue.innerHTML = lessValue

const elementMoreValue = document.getElementById('mpre-value')
elementMoreValue.innerHTML = moreValue
const lessValue = 0
const moreValue = 100
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * moreValue + 1)
}


console.log('Secret Number:', secretNumber)

const elementLessValue = document.getElementById('less-value')
elementLessValue.innerHTML = lessValue;

const elementMoreValue = document.getElementById('more-value')
elementMoreValue.innerHTML = moreValue;

function validKick(kick) {
  const number = +kick

  if (invalidKick(number)) {
    elementKick.innerHTML += '<div>valor In</div>';
  }

  if (allowedValue(number)) {
    elementKick.innerHTML += `<di>
    Valor in tem que ser entre ${lessValue} e ${moreValue}
    </div>`;
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
    <h3>Você Acertou!</h3>
    <h2>O Número Secreto era ${secretNumber}</h2>
    `
  } else if (number > secretNumber) {
    elementKick.innerHTML += `
    <div> O numero secreto é menor! <i class="fa-solid fa-arrow-down-9-1 fa-beat"></i></div>`
  } else {
    elementKick.innerHTML += `
    <div> O numero secreto é maior! <i class="fa-solid fa-arrow-up-9-1 fa-beat"></i></div>`
  }
}

function invalidKick(number) {
  return Number.isNaN(number)
}

function allowedValue(number) {
  return number > moreValue || number < lessValue
}
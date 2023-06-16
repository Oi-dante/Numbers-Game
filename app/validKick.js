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
    <h3>Você Acertou</h3>
    <h2>O Número Secreto era ${secretNumber}</h2>
    `
  }
}

function invalidKick(number) {
  return Number.isNaN(number)
}

function allowedValue(number) {
  return number > moreValue || number < lessValue
}
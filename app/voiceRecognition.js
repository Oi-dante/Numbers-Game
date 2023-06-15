const elementKick = document.getElementById('kick')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  kick = e.results[0][0].transcript
  kickResult(kick)
  validKick(kick)
}

function kickResult(kick) {
  elementKick.innerHTML = `
    <div>You Say</div>
    <span class="box">${kick}</span>
  `

}

function playAudio(file) {
    var audio = new Audio(file);
    audio.play();
}

const letters = "abcdefghijklmnopqrstuvwxyz".split("")
buttonsElements = [];
for (let letter of letters) {
    const element = `<div onClick="playAudio('assets/letters/${letter}.mp3')" class="button"><h1>${letter.toUpperCase()}</h1></div>`
    buttonsElements.push(element)
}

const element = `<div onClick="playAudio('assets/bravo.mp3')" class="button"><h1>Bravo</h1></div>`
buttonsElements.push(element)

var buttonsEl = document.getElementById("buttons");
buttonsEl.innerHTML = buttonsElements.join(' ');
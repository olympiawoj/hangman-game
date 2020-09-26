const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);

const figureParts = document.querySelectorAll("figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
        ${selectedWord.split("").map((letter) => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')}
    `;
    const innerWord = wordEl.innerText.replace(/\n/g, '')
    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You won! 😀';
        popup.style.display = 'flex';
    }
}

// Update the wrong letters
function updateWrongLettersEl(){
    console.log('Update wrong')
}

// Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(()=>{
        notification.classList.remove('show')
    }, 2000) // 2000 milliseconds, 2 seconds
}


// Keydown letter press
window.addEventListener('keydown', e=>{
    // console.log(e.keyCode) // each key has a key code 
    if(e.keyCode>=65 && e.keyCode <= 90){ // A through Z
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter)

                displayWord()
            } else {
                showNotification();
            }
        } else {
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrongLettersEl()
            } else {
                showNotification();
            }
        }
    }
})

displayWord();

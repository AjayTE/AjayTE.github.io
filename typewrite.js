
// Select the HTML elements
const h1Element = document.querySelector('.myself h1');
const h2Element = document.querySelector('.myself h2');
const pElement = document.querySelector('myself p');



// Store text to be typed
const h1Text = "Ajay";
const h2Text = "A mechanical Engineer graduate and computer science student";
const pText = "interested in programming, [x], travelling and learning new things!";

// initialize variables for tracking current element and character index
let currentElement = h1Element;
let currentText = h1Text;
let currentElementIndex = 0;


// Empty text content of element references
h1Element.textContent = '';
h2Element.textContent = '';
pElement.textContent = '';


// Typewrite effect add blinking
function startTypewriteEffect() {
    // effect
    currentElement.classList.add('blinking-cursor');

    writeText();
}

function writeText () {
    if (currentElementIndex < currentText.length) {
        currentElement.textContent += currentText[currentElementIndex];
        currentElementIndex += 1;
        setTimeout(writeText, 100)
    }
    else {
        if (currentText == pText) {
            currentElement.classList.remove('blinking-cursor');
            return;
        }
        else 
            setTimeout(function () {
                if (currentText == h1Text) {
                    currentElement = h2Element;
                    currentText = h2Text;
                }
                else if (currentText == h2Text) {
                    currentElement = pElement;
                    currentText = pText;
                }
                currentElement.textContent = '';
                currentElementIndex = 0;
                currentElement.classList.add('blinking-cursor');
                writeText();

        }, 500);
    }
}

window.addEventListener('load', startTypewriteEffect);

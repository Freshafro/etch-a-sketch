const body = document.querySelector("body");
const container = document.querySelector("#container");
const button = document.querySelector("button");

let userInput;

while (true) {
    userInput = prompt("How many squares per side? (Max: 100)", "16");

    if (userInput < 100 && userInput != null) {
        createLayout(userInput);
        break;
    } else if (userInput == null) {
        createLayout();
        break;
    }
}

button.addEventListener("click", e => {
    window.location.reload();
    /*allDivs.forEach(element => {
        //element.classList.remove("hover");
        element.style.backgroundColor = "azure";
    });*/
    // userInput = prompt("How many squares per side? (Max: 100)");
});

function createDiv() {
    const div = document.createElement("div");
    container.appendChild(div);
}

function createLayout(squares = 16) {
    
    for (let i = 0; i < squares * squares; i++) {
        createDiv();
    }

    container.style["grid-template-columns"] = `repeat(${squares}, auto)`;
    container.style["grid-template-rows"] = `repeat(${squares}, auto)`;
}

const randomColor = function(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

/*const r = randomColor(0, 255);
const g = randomColor(0, 255);
const b = randomColor(0, 255);*/

const allDivs = document.querySelectorAll("#container div");
setTimeout(function (e){
    allDivs.forEach(element => {
        element.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = `rgb(0, 0, 0)`;
        });
    });
}, 1000);
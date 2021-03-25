const body = document.querySelector("body");
const container = document.querySelector("#container");

let counter = 1;

function createDiv() {
    const div = document.createElement("div");
    div.textContent = counter;
    container.appendChild(div);
}

function createLayout(width, height) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            createDiv();
            counter++;
        }
    }
}

createLayout(16, 16);

const allDivs = document.querySelectorAll("#container div");
allDivs.forEach(element => {
    element.addEventListener("mouseover", e => {
        e.target.classList.add("hover");
        e.target.addEventListener("mouseleave", e => {
            e.target.classList.remove("hover");
        });
    });
});

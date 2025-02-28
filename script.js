const body = document.querySelector("body");

const parent = document.createElement("div");
parent.setAttribute("id", "container");

const button = document.createElement("button");
button.textContent = "Grid Size";
button.style.marginBottom = "15px";
button.style.padding = "5px 20px";
button.style.fontSize = "15px";
button.style.borderRadius = "10px";

button.addEventListener("click", function gridSize() {
    do {
        userInput = parseInt(prompt("Enter the grid size: "));
    } while (userInput > 100);
    
    const container = document.querySelector("#container");

    for (i=0; i<Math.pow(userInput, 2); i++) {
        const element = document.createElement("div");
        element.setAttribute("class", "square");
        element.addEventListener("mouseover", () => {
            element.style.background = "black";
        });
        container.appendChild(element);
    }
});

body.appendChild(button);
body.appendChild(parent);

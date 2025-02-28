const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Grid Size";
button.style.marginBottom = "15px";
button.style.padding = "5px 20px";
button.style.fontSize = "15px";
button.style.borderRadius = "10px";

body.appendChild(button);

const parent = document.createElement("div");
parent.setAttribute("id", "container");
body.appendChild(parent);

const container = document.querySelector("#container");

for (i=0; i<256; i++) {
    const element = document.createElement("div");
    element.setAttribute("class", "square");
    element.setAttribute("style", `height: ${640/16}px`)
    element.addEventListener("mouseover", () => {
        const COLOR_RED = Math.floor(Math.random()*256);
        const COLOR_GREEN = Math.floor(Math.random()*256);
        const COLOR_BLUE = Math.floor(Math.random()*256);
        element.style.background = `rgb(${COLOR_RED}, ${COLOR_GREEN}, ${COLOR_BLUE})`;
    });
    
    container.appendChild(element);
}

button.addEventListener("click", function gridSize() {
    do {
        userInput = parseInt(prompt("Enter the grid size: "));
    } while (userInput > 100);

    container.replaceChildren();
    
    for (i=0; i<Math.pow(userInput, 2); i++) {
        const element = document.createElement("div");
        element.setAttribute("class", "square");
        element.setAttribute("style", `height: ${640/userInput}px`)
        element.addEventListener("mouseover", () => {
            const COLOR_RED = Math.floor(Math.random()*256);
            const COLOR_GREEN = Math.floor(Math.random()*256);
            const COLOR_BLUE = Math.floor(Math.random()*256);
            element.style.background = `rgb(${COLOR_RED}, ${COLOR_GREEN}, ${COLOR_BLUE})`;
        });
        
        container.appendChild(element);
    }
});
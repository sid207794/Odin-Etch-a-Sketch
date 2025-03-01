const body = document.querySelector("body");

body.style.background = "rgb(30, 30, 30)";

const button = document.createElement("button");
button.textContent = "GRID SIZE";
button.style.marginBottom = "15px";
button.style.padding = "5px 20px";
button.style.fontSize = "15px";
button.style.fontWeight = "bold";
button.style.borderRadius = "10px";
button.style.background = "rgb(180, 180, 180)";
button.style.borderColor = "white";

body.appendChild(button);

const parent = document.createElement("div");
parent.setAttribute("id", "container");
body.appendChild(parent);

const container = document.querySelector("#container");
container.style.background = "black";

for (i=0; i<256; i++) {
    const element = document.createElement("div");
    element.setAttribute("class", "square");
    element.setAttribute("style", `height: ${640/16}px`);

    let j = 100;
    element.addEventListener("mouseover", () => {
        const COLOR_RED = Math.floor(Math.random()*256);
        const COLOR_GREEN = Math.floor(Math.random()*256);
        const COLOR_BLUE = Math.floor(Math.random()*256);
        element.style.background = `rgb(${COLOR_RED}, ${COLOR_GREEN}, ${COLOR_BLUE})`;

        if (j <= 0) {
            element.style.filter = `brightness(0%)`;
        } else {
            element.style.filter = `brightness(${j}%)`;
            j -= 10;
        }
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
        element.setAttribute("style", `height: ${640/userInput}px`);

        let j = 100;
        element.addEventListener("mouseover", () => {
            const COLOR_RED = Math.floor(Math.random()*256);
            const COLOR_GREEN = Math.floor(Math.random()*256);
            const COLOR_BLUE = Math.floor(Math.random()*256);
            element.style.background = `rgb(${COLOR_RED}, ${COLOR_GREEN}, ${COLOR_BLUE})`;
            
            if (j <= 0) {
                element.style.filter = `brightness(0%)`;
            } else {
                element.style.filter = `brightness(${j}%)`;
                j -= 10;
            }
        });
        
        container.appendChild(element);
    }
});
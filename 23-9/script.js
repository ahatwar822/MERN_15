let x = document.querySelector("h1 span");
let y = document.querySelector("h2 span");

document.addEventListener("mousemove", (event) => {
    x.textContent = event.x;
    y.textContent = event.y;
})


let cur = document.querySelector("#cursor");
document.addEventListener("mousemove", (event) => {
    cur.style.left = `${event.x}px`;
    cur.style.top = `${event.y}px`;
})

// mouse enter on india cursor sizze is incresae 

let india = document.querySelector("#india");

india.addEventListener("mouseenter", () => {
    cur.style.scale = 4;
})

india.addEventListener("mouseleave", () => {
    cur.style.scale = 1;
})
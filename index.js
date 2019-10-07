// Write your code here!
const body = document.querySelector("body");

document.querySelector("#main").remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory"
document.body.appendChild(newHeader);
newHeader.innerHTML = "Matthew is the champion!";


const color = ["red", "blue", "green", "yellow", "pink", "purple"];

function changeColor(){
    const random = Math.floor(Math.random() * color.length);
    document.getElementById("full").style.backgroundColor = color[random];
}
function changeColor(){
return `rgb(${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)})`
}

let box1 = document.querySelector('.first')
box1.addEventListener("click", function(){
    box1.style.backgroundColor = changeColor()
});

let box2 = document.querySelector('.second')
box2.addEventListener("mousemove", function(){
    box2.style.backgroundColor = changeColor()
});
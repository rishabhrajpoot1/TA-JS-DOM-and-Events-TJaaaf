let main = document.querySelector('.main')
for(let i = 0; i<500; i++){
let div = document.createElement('div')
div.innerText = Math.floor(Math.random() * 500);
main.append(div)
}

function changeColor(){
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

let boxes = document.querySelectorAll('div');

main.addEventListener("mousemove", function(){
    
  boxes.forEach((element)=>{
      element.style.backgroundColor = changeColor();
      element.innerText = Math.floor(Math.random() * 500);
  })
}); 
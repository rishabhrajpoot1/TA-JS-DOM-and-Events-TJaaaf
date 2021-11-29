// Without Event Delegation

let allBoxes1 = document.querySelectorAll('.box1');

allBoxes1.forEach((box1, index)=>{
box1.addEventListener("click", function(){
    box1.innerText = index + 1;
    setTimeout(()=>{
        box1.innerText = "";
      }, 5000);
});
})



// With Event Deligation

let root = document.querySelector('.boxes2');

let allBoxes2 = document.querySelectorAll('.box2');

allBoxes2.forEach((box2, index)=>{
    box2.setAttribute('data-index', index + 1);
});

function handleEvent(event){
     event.target.innerText = event.target.dataset.index
    setTimeout(()=>{
        event.target.innerText = "";
      }, 5000);
}
root.addEventListener("click", handleEvent)

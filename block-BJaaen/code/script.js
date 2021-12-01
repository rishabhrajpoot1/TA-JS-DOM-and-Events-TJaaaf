let computerIcon = ["---Rock", "---Paper", "---Scissor"]

let userIconName = document.querySelector('.result');

let you1 = document.querySelector('.result1');

let com = document.querySelector('.com');

let com1 = document.querySelector('.com1');

let userIcon = document.querySelectorAll('.icon1');

let result = document.querySelector('.final-result')

let referesh = document.querySelector('.referesh')

let counting1= 0
let counting2 = 0

for (let key of userIcon){
    key.addEventListener('click', function(event){
        event.target.style.color = "black"
        setTimeout(()=>{
                event.target.style.color = "rgb(28,144,255)";
          },1000);
var random = Math.floor(Math.random()*3);
     event.preventDefault();
      userIconName.innerText = event.target.id
      com.innerText = computerIcon[random]

      if(userIconName.innerText === com.innerText){
        result.innerText = "It's a tie 🤦🏼"

    }else if(userIconName.innerText == "---Rock" && com.innerText == "---Scissor" || userIconName.innerText == "---Scissor" && com.innerText == "---Paper" || userIconName.innerText == "---Paper" && com.innerText == "---Rock"){
        counting1 = counting1+1
        you1.innerText = counting1
        result.innerText = "You Won! 😎"
       
    }else if(userIconName.innerText == "---Scissor" && com.innerText == "---Rock"|| userIconName.innerText == "---Paper" && com.innerText == "---Scissor" || userIconName.innerText == "---Rock" && com.innerText == "---Paper"){
        counting2 = counting2+1
        com1.innerText = counting2
        result.innerText = "You Lost! 😔"
    }
    });
    
}

referesh.reload()
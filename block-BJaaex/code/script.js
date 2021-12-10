const cardArrays = [
  {
    name: "shell",
    img: "assets/media/pic1.jpeg",
  },
  {
    name: "bobomb",
    img: "assets/media/pic2.png",
  },
  {
    name: "luigi",
    img: "assets/media/pic3.jpeg",
  },
  {
    name: "peach",
    img: "assets/media/pic4.jpeg",
  },
  {
    name: "star",
    img: "assets/media/pic5.jpeg",
  },
  {
    name: "mario",
    img: "assets/media/pic6.png",
  },
  {
    name: "1up",
    img: "assets/media/pic7.jpeg",
  },
  {
    name: "mushroom",
    img: "assets/media/pic8.jpeg",
  },
  {
    name: "shell",
    img: "assets/media/pic1.jpeg",
  },
  {
    name: "bobomb",
    img: "assets/media/pic2.png",
  },
  {
    name: "luigi",
    img: "assets/media/pic3.jpeg",
  },
  {
    name: "peach",
    img: "assets/media/pic4.jpeg",
  },
  {
    name: "star",
    img: "assets/media/pic5.jpeg",
  },
  {
    name: "mario",
    img: "assets/media/pic6.png",
  },
  {
    name: "1up",
    img: "assets/media/pic7.jpeg",
  },
  {
    name: "mushroom",
    img: "assets/media/pic8.jpeg",
  }
];


const game = document.querySelector(".parent");
let count = 0;
let array1 = [];
let array2 = [];
let span = document.querySelector('span');
let moves = 0



// let gameGrid = cardArrays.concat(cardArrays)
cardArrays.sort(() => 0.5 - Math.random());

const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);


cardArrays.forEach((item, i) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", i)
  card.value = item.name


  card.style.backgroundImage = `url(${item.img})`;
  setTimeout(function(){ card.style.backgroundImage = "none"}, 600);
  grid.appendChild(card);
  

if(count<2){
  card.addEventListener("click", function (event) {
   
    let click = event.length
    //   console.log(event.target.value)
    let id = event.target.id;
    array1.push(id)
    array2.push(event.target.value)
    card.style.backgroundImage = `url(${item.img})`;
   
    
    // setTimeout(function(event){card.style.backgroundImage = "none"}, 2000);


    console.log(array2,"array2");
    console.log(array1, "array1");

    if(count<=2){
        count = count + 1
        if(count === 1){
            if(array2[0] == array2[1]){
                document.getElementById(array1[0]).style.backgroundImage = `url(${item.img})`
                document.getElementById(array1[1]).style.backgroundImage = `url(${item.img})`
                array1 = []
                array2= []
                console.log('match')
            }else{
                setTimeout(()=>{
                    document.getElementById(array1[0]).style.backgroundImage = "none"
                    document.getElementById(array1[1]).style.backgroundImage = "none"
                    array1 = []
                    array2 = []
                    
                },1000);
                
                console.log('not match')
            }
            
            moves = moves + 1

            span.innerText = `Total no. of moves: ${moves}`;

            count = 0
        }
        
    }
    
});
}
moves = array1.length
});







let rootElement = document.querySelector('ul');
let search = document.querySelector('#input')
let stark = document.querySelector('.stark')
let lannisters = document.querySelector('.lannisters')
let baratheons = document.querySelector('.baratheons')
let targaryens = document.querySelector('.targaryens')
let greyjoys = document.querySelector('.greyjoys');
let tyrells = document.querySelector('.tyrells');
let tullys = document.querySelector('.tullys');
let redwyne = document.querySelector('.redwyne');
let freys = document.querySelector('.freys');
let arryns = document.querySelector('.arryns')
let dothrakis = document.querySelector('.dothrakis')

let allHouse = got.houses

let allPeople = []
allHouse.forEach((e)=>{
  e.people.map((p)=>{
    allPeople.push(p)
  })
});

function createUI(allPeople){

  rootElement.innerHTML=""
       
    allPeople.forEach((element)=>{
      
       let li = document.createElement('li');

       let img = document.createElement('img');
       img.src = element.image

       let h2 = document.createElement('h2');
       h2.innerText = element.name

       let p = document.createElement('p');
       p.innerText = element.description

      //  let center = document.createElement('center')
       let btn = document.createElement('div')
       btn.classList.add('btn')
       let a = document.createElement('a')
       a.href = element.wikiLink
       a.innerText = "Know More!" 
       btn.append(a)

       let div = document.createElement('div')
       div.append(img, h2, btn)
       div.classList.add('info')

       li.classList.add('box')
       rootElement.classList.add('container')
       li.append(div,  p, btn);
        rootElement.append(li)
       })
}



stark.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[0].people
  console.log(store);
  createUI(store);
});

lannisters.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[1].people
  console.log(store);
  createUI(store);
});

baratheons.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[2].people
  console.log(store);
  createUI(store);
});

targaryens.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[3].people
  console.log(store);
  createUI(store);
});

greyjoys.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[4].people
  console.log(store);
  createUI(store);
});

tyrells.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[5].people
  console.log(store);
  createUI(store);
});

tullys.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[6].people
  console.log(store);
  createUI(store);
});

redwyne.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[7].people
  console.log(store);
  createUI(store);
});

freys.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[8].people
  console.log(store);
  createUI(store);
});

arryns.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[9].people
  console.log(store);
  createUI(store);
});

dothrakis.addEventListener("click", function (event) {
  event.preventDefault();
  let store = event.target.innerText
  store = allHouse[10].people
  console.log(store);
  createUI(store);
});



function handleSearch(event) {
  searchText = event.target.value;
  let filteredPeople = allPeople.filter((p) => {
    return p.name.toLowerCase().includes(searchText.toLowerCase());
  });
  createUI(filteredPeople);
}

search.addEventListener("keyup", handleSearch);

createUI(allPeople)
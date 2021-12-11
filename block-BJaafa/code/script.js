let word = document.querySelector('h2');

let meaning = document.querySelector('p');

let button = document.querySelector('button');

console.log(data.length)


function generateRandomNumber (max){
    return Math.floor(Math.random() * max);
}

function handleClick(){
    let random = generateRandomNumber(data.length);
    let randomData = data[random];
    word.innerText = randomData.word;
    meaning.innerText = randomData.meaning;
}

handleClick()

button.addEventListener("click", handleClick);
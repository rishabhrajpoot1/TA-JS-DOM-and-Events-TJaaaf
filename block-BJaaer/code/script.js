let form = document.querySelector('form');
let result = document.querySelector('.result');
let name = document.querySelector('h2');
let email = document.querySelector('.email');
let loves = document.querySelector('.loves')
let color = document.querySelector('.color');
let rating = document.querySelector('.rating');
let book = document.querySelector('.book');
let condition = document.querySelector('.condition');
let close = document.querySelector('.close')

let userInfo = {}



function handleSubmit(event){
    event.preventDefault();
    userInfo.text = form.elements.text.value
    userInfo.email = form.elements.email.value
    userInfo.gender = form.elements.gender.value
    userInfo.color = form.elements.color.value
    userInfo.range = form.elements.range.value
    userInfo.drone = form.elements.drone.value
    userInfo.terms = form.elements.terms.checked

    console.log(userInfo)

    name.innerHTML = `Hello ${userInfo.text}`

    email.innerText = `Email: ${userInfo.email}`

    loves.innerText = `You Love: ${userInfo.gender}`

    color.innerText = `Color: ${userInfo.color}`

    rating.innerText = `Rating: ${userInfo.range}`

    book.innerText = `Book Genre: ${userInfo.drone}`

    if(userInfo.terms === true){
        condition.innerText = `👉 You agree to Terms and Condition`
        condition.style.textDecoration = "underline"
    }else{
        condition.innerText = `👉 You Do Not agree to Terms and Condition`
        condition.style.textDecoration = "underline"
    }

}
form.addEventListener('submit', handleSubmit);

result.style.display = "none"
function handleEvent(event){
    form.style.display = "none"
    result.style.display = "block"
}
form.addEventListener('submit', handleEvent);


function handleElement(event){
    result.style.display = "none"
    form.style.display = "flex"
    setTimeout(()=>{
        document.location.reload()
    },1)
}
close.addEventListener('click', handleElement);
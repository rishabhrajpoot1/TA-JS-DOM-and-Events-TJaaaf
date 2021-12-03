
let input = document.querySelector('input');
let ul = document.querySelector('ul')

input.addEventListener("keyup", (event) => {
    event.preventDefault();

    if(event.keyCode === 13){
        console.log(event.keyCode);
        let movieName = event.target.value;
if(movieName.length){

        console.log(movieName);

        event.target.value = ""

        let li = document.createElement('li');
        li.innerText = movieName

        let check = document.createElement('span')
        check.classList = ('check')
        let inputBox = document.createElement('input')
        check.append(inputBox);
        inputBox.setAttribute("type", "checkbox")
        check.style.display = "inline-block"
        li.append(check)

        let cross = document.createElement('span')
        cross.classList = ('cross')
        cross.innerText = "❌"
        li.append(cross);
        ul.append(li) 

        function handleClick(event){
            event.preventDefault();
            if(inputBox.checked === true){
            li.remove()
        }
        }
        cross.addEventListener("click", handleClick);
    }
    }
});

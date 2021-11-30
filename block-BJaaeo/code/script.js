let bar = document.getElementById('screen');

let buttons = document.querySelectorAll('.button');

let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (event)=>{
        buttonText = event.target.innerText
        bar.value += buttonText
        if(buttonText == 'C'){
            screenValue = ""
            bar.value = screenValue
        }else if(buttonText == '='){
            bar.value = eval(screenValue);

        }else{
            screenValue += buttonText
            bar.value = screenValue
        };
    });
    }
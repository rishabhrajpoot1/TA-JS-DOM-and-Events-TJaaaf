let form = document.querySelector('form')

let usernameError = "";
let useremailError = "";
let userphoneError = "";
let userpasswordError ="";

function doesNotContainNumber(str){
    return str.split('').some(e => Number(e));
}


function handleSubmit(event){
    event.preventDefault();
    console.dir(event.target);

    let UsernameElm = event.target.elements.username;
    if(UsernameElm.value.length < 4){
        usernameError = "can't be less than four charachter!"
    }else if(doesNotContainNumber(UsernameElm.value)){
        usernameError = "can't be Number!"
    }else{
        usernameError = ""
    }
    UsernameElm.nextElementSibling.innerText = usernameError;
    

    let UseremailElm = event.target.elements.email;
    if(UseremailElm.value.length < 6){
        useremailError = "must be atleast six charachter!"
    }else{
        useremailError = ""
    }
    UseremailElm.nextElementSibling.innerText = useremailError;


    let UserphoneElm = event.target.elements.phone;
    if(UserphoneElm.value.length < 7){
        userphoneError = "number can't be less than seven!"
    }else{
        userphoneError = ""
    }
    UserphoneElm.nextElementSibling.innerText = userphoneError;

    let Userpassword = event.target.elements.password;
    let UserconfirmElm = event.target.elements.confirm;
    if(UserconfirmElm.value != Userpassword.value){
        userpasswordError = "Password and confirm password must be same"
    }else{
        userpasswordError = ""
    }
    UserconfirmElm.nextElementSibling.innerText = userpasswordError;
    
}

form.addEventListener("submit", handleSubmit)
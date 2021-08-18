function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.getElementById('subscribe');

const textbox = form.elements["email"]

//cannot do since its not an input element
// const warning = form.elements["warning"];

const warning = document.getElementById('warning');

textbox.addEventListener("input", (e) =>{
    textbox.style.color = "white";
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const email = form.elements["email"].value;

    if(!validateEmail(email)){
        warning.style.color = "red";
    }
    else{
        warning.style.color = "transparent";
    }
    
})
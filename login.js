document.getElementById('login-btn').addEventListener('click', function () {
    //set the input email
    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value;


    //input password
    const inputPassword = document.getElementById('input-paswrd');
    const password = inputPassword.value;
    if (email == 'abc@gmail.com' && password == "hello") {
        console.log('valid id');
        window.location.href = "bankking.html";
    }
    else {
        console.log('invalid id');
    }

})
document.getElementById('login-btn').addEventListener('click',function(){
    console.log('btn clicked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
    console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value ;
    console.log(userPassword);

    // check user valed or not

    if(userEmail == 'sontan@bap.com' && userPassword == 'khairul'){
            location.href = '../js/banking.html';g
    }
})
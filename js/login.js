// step 1: add click event handler with login button
document.getElementById("btn-login").addEventListener('click', function(){
    // step 2: get the email address inside the email field
    // always use .value to get the input field value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log('user-email: ' + email);
    emailField.value = '';
    // step 3: get password
    // 3.1: set id on the HTML element
    // 3.2: get the element
    // 3.3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log('user-password: ' + password);
    passwordField.value = '';
    // valid or invalid user check
    if(email === 'symoonma@gmail.com' && password === 'symoon007'){
       window.location.href = 'bank.html';
    }
    else{
       alert('Warning!! Invalid user email or password.')
    }
})
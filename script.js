function register(e) {
    e.preventDefault();
    var nom = document.getElementById('nom');
    var prenom = document.getElementById('prenom')
    var inputEmail = document.getElementById('inputEmail');
    var password = document.getElementById('password');
    var confirm = document.getElementById('confirm');
    var formValid = true

    if (nom.value =="") {
        nom.classList.remove('is-valid')
        nom.classList.add('is-invalid')
        formValid = false
    }else{
        nom.classList.remove('is-invalid')
        nom.classList.add('is-valid')
    }
    if (prenom.value =="") {
        prenom.classList.remove('is-valid')
        prenom.classList.add('is-invalid')
        formValid = false
    }else{
        prenom.classList.remove('is-invalid')
        prenom.classList.add('is-valid')
    }
    if ((inputEmail.value =="")) {
        inputEmail.classList.remove('is-valid')
        inputEmail.classList.add('is-invalid')
        formValid = false
    }else{
        inputEmail.classList.remove('is-invalid')
        inputEmail.classList.add('is-valid')
    }
    if (password.value =="") {
        password.classList.remove('is-valid')
        password.classList.add('is-invalid')
        formValid = false
    }else{
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
    }
    if ((confirm.value =="") || (confirm.value != password.value)) {
        confirm.classList.remove('is-valid')
        confirm.classList.add('is-invalid')
        formValid = false
    }else{
        confirm.classList.remove('is-invalid')
        confirm.classList.add('is-valid')
    }

    var data = {
        name: nom.value,
        last :prenom.value,
        email : inputEmail.value,
        password : password.value
    }
   
    if (formValid) {
        var users = JSON.parse(localStorage.getItem('users')) || []
        users.push(data)
        localStorage.setItem('users',JSON.stringify(users))
        window.location.href = 'login.html'
    }
}

var button = document.querySelector('button');
button.addEventListener('click', register)


function login(e) {
    e.preventDefault();
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');

    if ((email.value =="") ||(!email.value.includes('@'))) {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
       

    } else{
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }
    if (pw.value =="") {
        pw.classList.remove('is-valid')
        pw.classList.add('is-invalid')
        
    }else{
        pw.classList.remove('is-invalid')
        pw.classList.add('is-valid')
    }

var users = JSON.parse(localStorage.getItem('users')) || []
 
var userFound = users.find((user)=> user.email === email.value && user.password === pw.value)
console.log(userFound);
const from = document.getElementById('loginform')
if (userFound == undefined) {
   alert('verify your email or password')
}else{
    
    window.location.href = 'index.html'
}
}

var button = document.querySelector('button');
button.addEventListener('click',login)
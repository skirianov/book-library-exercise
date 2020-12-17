const signInEmailPassword = document.querySelector('#signin-form');
const loginForm = document.querySelector('#login-form');
const submit = document.querySelector('#submit');
const modal = document.querySelector('#modal-login');
const signIn = document.querySelector('#modal-signin');
const page = document.querySelector('.page');
const signModal = document.querySelector('#sign-modal-content');


const signInBtn = document.querySelector('#sign-in-btn');

signInBtn.addEventListener('click', (e) => {
    signIn.style.display = "block";
    page.style.filter = "blur(2px)";
});

signModal.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
})

signIn.addEventListener('click',() => {hideSignInModal()});

const hideSignInModal = function(){
    signIn.style.display = "none";
    page.style.filter = "none";
}


submit.addEventListener('click',(e) => {

    e.preventDefault();

    let password = signInEmailPassword["password"].value;
    let email = signInEmailPassword["email"][0].value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        signInEmailPassword["email"][0].value = '';
        signInEmailPassword["password"].value = '';
        signInEmailPassword["name"].value = '';
        alert('You have succesfully registered! Now you can log in.')
        hideSignInModal();
    })
    .catch ((error) =>{
        console.log(error);
    })

        
})


// Login process
const login = document.querySelector('#login');

login.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    modal.style.display = "block";
    page.style.filter = "blur(2px)";


    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    loggedInMainPage();
    return user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
})


const loggedInMainPage = function() {
    window.location.href = "https://libtrack-5215d.web.app/main.html";
}

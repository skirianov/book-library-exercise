const signInEmailPassword = document.querySelector('#signin-form');
const loginForm = document.querySelector('#login-form');


signInEmailPassword.addEventListener('submit',(e) => {
    e.preventDefault();

    const name = signInEmailPassword["name"].value;
    const password = signInEmailPassword["password"].value;
    const email = signInEmailPassword["email"].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    });

        signInEmailPassword["email"].value = '';
        signInEmailPassword["password"].value = '';
        signInEmailPassword["name"].value = '';
        hideSignInModal();
});

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
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
})


const loggedInMainPage = function() {
    window.location.href = "http://localhost:5000/main.html";
}


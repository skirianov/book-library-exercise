const formEmailPassword = document.querySelector('#signin-form');

formEmailPassword.addEventListener('submit',(e) => {
    e.preventDefault();

    const email = formEmailPassword["email"].value;
    const password = formEmailPassword["password"].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    });

    formEmailPassword["email"].value = '';
    formEmailPassword["password"].value = '';
});

const login = document.querySelector('#login');

login.addEventListener('click', () => {
    const email = formEmailPassword["email"].value;
    const password = formEmailPassword["password"].value;

    modal.style.display = "block";
    page.style.filter = "blur(2px)";


    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
        if (user.additionalUserInfo.isNewUser === false){
            loggedInMainPage();
        } else {
            newUserRegRequest();
        }

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage, errorCode)
  });
})


const loggedInMainPage = function() {
    window.location.href = "http://localhost:5000/main.html";
}


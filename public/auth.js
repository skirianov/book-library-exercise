const formEmailPassword = document.querySelector('#signin-form');

formEmailPassword.addEventListener('submit',(e) => {
    e.preventDefault();

    const email = formEmailPassword["email"].value;
    const password = formEmailPassword["password"].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    })
})
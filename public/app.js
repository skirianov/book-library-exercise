const Book = function(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages + ' pages';
    this.read = read;
    this.info = function(){
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
    }
}

const theHobbit = new Book('The hobbit','Tolkien',295,'not read yet');

console.log(theHobbit.info());

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
  });
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ],
    // Other config options...
  });




function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 1000,
      'height': 220,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }
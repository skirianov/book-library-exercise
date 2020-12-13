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







function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }
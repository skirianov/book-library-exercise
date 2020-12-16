const modal = document.querySelector('#modal-login');
const signIn = document.querySelector('#modal-signin');
const page = document.querySelector('.page');
const signModal = document.querySelector('#sign-modal-content');


const signEmail = document.querySelector('#sign-in-email');
const confirmEmail = document.querySelector('#confirm-email');


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


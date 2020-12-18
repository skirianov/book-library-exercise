const userLink = document.querySelector('.user-login');
const user = firebase.auth().currentUser;
const modal = document.querySelector('.mod-container');
const addBookModal = document.querySelector('.modal-book');
const addBookButton = document.querySelector('#add-book-btn');
const page = document.querySelector('.page');
const bookCardList = document.querySelector('.book-cards');
let bookCard = document.querySelectorAll('.book');

let bookArr = [{
    title: "Преступление и наказание",
    author: "Достоевский",
    pages: 300,
    read: "Yes"    
    },
    {
    title: "The fall of moondust",
    author: "A. Clark",
    pages: 100,
    read: "Yes"    
    }
];

for (let i = 0; i < bookArr.length; i++){
    
    let bookTitle = document.querySelectorAll('.head-text');
    let bookPages = document.querySelectorAll('.head-text-small');
    bookTitle[i].textContent = bookArr[i].title;
    bookPages[i].textContent = bookArr[i].pages + ' pages';
};

const addBookForm = document.querySelector('.add-book');
const submit = document.querySelector('.button');

submit.addEventListener('click',() => {
    const title = addBookForm["title"].value;
    const author = addBookForm["author"].value;
    const pages = addBookForm["pages"].value;
    const read = addBookForm["read"].value;

    const book = new Book(title, author, pages, read);

    addBookToArray(book);
    clearBookEntry();
    bookListAppend();
    hideSignInModal();
    for (let i = 0; i < bookArr.length; i++){
    
        let bookTitle = document.querySelectorAll('.head-text');
        let bookPages = document.querySelectorAll('.head-text-small');
        bookTitle[i].textContent = bookArr[i].title;
        bookPages[i].textContent = bookArr[i].pages + ' pages';
    };
    
});

const clearBookEntry = function() {
    addBookForm["title"].value = '';
    addBookForm["author"].value = '';
    addBookForm["pages"].value = '';
    addBookForm["read"].value = '';
};


const addBookToArray = function(book){
    bookArr.push(book);
    console.log(bookArr);
};


const bookListAppend = function(){
    const bookCardCreate = document.createElement('div');
    bookCardCreate.classList = "book";

    let content = `
                    <div class="book-head">
                        <p class="head-text">#book-name</p>
                        <p class="head-text-small">pages</p>
                    </div>
                    <div class="book-main">
                         <img class="book-img" src="imgs/book.png" alt="book-img">
                    </div>
                    <div class="book-foot">
                            <div class="delete btn">
                            <p class="foot-text">Delete</p>
                    </div>
                    <div class="fav btn">
                        <p class="foot-text">Favourite</p>
                    </div>
                    <div class="status btn">
                        <p class="foot-text">Read</p>
                    </div>
                    </div>
                `; 
    bookCardCreate.innerHTML = content;
    bookCardList.appendChild(bookCardCreate);
    
};

const hideSignInModal = function(){
    addBookModal.style.display = "none";
    page.style.filter = "none";
};

const Book = function(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages + ' pages';
    this.read = read;
    this.info = function(){
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
    }
};

addBookModal.addEventListener('click',() => {hideSignInModal()});

addBookButton.addEventListener('click', (e) => {
    addBookModal.style.display = "block";
    page.style.filter = "blur(2px)";
});

modal.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
});
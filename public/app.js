const userLink = document.querySelector('.user-login');
const user = firebase.auth().currentUser;
const modal = document.querySelector('.mod-container');
const addBookModal = document.querySelector('.modal-book');
const addBookButton = document.querySelector('#add-book-btn');
const page = document.querySelector('.page');
const bookCardList = document.querySelector('.book-cards');
let bookTitle,bookPages;
let bookCard = document.querySelectorAll('.book');
let size = 0;
db.collection('books').get().then(snap => {
    size = snap.size // will return the collection size
});


let bookArr = [];

function onload(){
    for (let i = 0; i < size; i++){
        bookListAppend();
    };
    
    bookTitle = document.querySelectorAll('.head-text');
    bookPages = document.querySelectorAll('.head-text-small');
    
}


onload();
updateBooks();

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
    updateBooks();
    
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



function updateBooks() {
    for (let i = 0; i < size; i++){
        var docRef = db.collection("books").doc("book" + i);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                bookArr.push(doc.data());
                
                bookTitle[i].textContent = bookArr[i].title;
                bookPages[i].textContent = bookArr[i].pages + ' pages';
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
       
    };
};

/*
db.collection("books").doc('book' + i.toString()).set({
    title: bookArr[i].title,
    author: bookArr[i].author,
    pages: bookArr[i].pages,
    read: bookArr[i].read,
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
*/
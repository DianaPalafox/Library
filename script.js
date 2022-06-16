let myLibrary = []; 
let buttonAddBook = document.querySelector('.add-book');
let buttonSubmit = document.querySelector('.submit');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.info = function() {
        console.log(title, author, pages, read)
    }
}

function addBookToLibrary() {
    buttonSubmit.addEventListener('click', () => {
        let title = document.getElementById('title').value; 
        let author = document.getElementById('author').value; 
        let pages = document.getElementById('pages').value; 
        let read = document.getElementById('read').value; 
        let newBook = new Book(title, author, pages, read); 
        myLibrary.push(newBook); 
        console.log(myLibrary); 
    })
}

addBookToLibrary(); 

function showForm() {
   buttonAddBook.addEventListener('click', e => {
        document.getElementById('form').style.display = 'block'; 
   })
}
showForm(); 


function displayBooks() {
    myLibrary.forEach(book => {
        for (let key in book) {
            console.log(`${key}: ${book[key]}`);
        }
    }); 
}

displayBooks();


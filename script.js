let myLibrary = []; 
let buttonAddBook = document.querySelector('.add-book');
let buttonSubmit = document.querySelector('.submit');
let booksContainer = document.querySelector('.booksContainer'); 

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
}

function addBookToLibrary() {
    buttonSubmit.addEventListener('click', () => {
        let title = document.getElementById('title').value; 
        let author = document.getElementById('author').value; 
        let pages = document.getElementById('pages').value; 
        let read = document.getElementById('read').value; 
        let newBook = new Book(title, author, pages, read); 
        myLibrary.push(newBook); 
        document.getElementById('form').style.display = 'none';
        displayBooks();
    })
}

addBookToLibrary(); 

function showForm() {
   buttonAddBook.addEventListener('click', () => {
        document.getElementById('form').style.display = 'block'; 
   })
}
showForm(); 


function displayBooks() {
    for(let i=0; i<myLibrary.length; i++) {
        //Create the main div and the div that will store the information
    
        const infoContainer = document.createElement('div'); 
        infoContainer.classList.add('info-container');

        //Create the divs that will contain the author name, title and pages of the book
        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-info');

        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('book-info');

        const bookPages = document.createElement('div'); 
        bookPages.classList.add('book-info'); 
        
        //Create the spans for the headings
        const titleHeading = document.createElement('div');
        titleHeading.classList.add('heading-style');

        const authorHeading = document.createElement('div');
        authorHeading.classList.add('heading-author');

        const pagesHeading = document.createElement('div');
        pagesHeading.classList.add('heading-pages');

        //Add the headings 
        titleHeading.textContent = 'Title:';
        authorHeading.textContent = 'Author:';
        pagesHeading.textContent = 'Number of pages:'; 

        const titleInput = document.createElement('div'); 
        titleInput.classList.add('input-style');

        const authorInput = document.createElement('div'); 
        authorInput.classList.add('input-style');

        const pagesInput = document.createElement('div');
        pagesInput.classList.add('input-style'); 

        titleInput.textContent = document.getElementById('title').value;
        authorInput.textContent = document.getElementById('author').value; 
        pagesInput.textContent = document.getElementById('pages').value;

        infoContainer.appendChild(bookTitle);
        infoContainer.appendChild(bookAuthor);
        infoContainer.appendChild(bookPages); 

        bookTitle.appendChild(titleHeading);
        bookAuthor.appendChild(authorHeading);
        bookPages.appendChild(pagesHeading);

        bookTitle.appendChild(titleInput);
        bookAuthor.appendChild(authorInput);
        bookPages.appendChild(pagesInput);

        booksContainer.appendChild(infoContainer); 

    }   
    
}




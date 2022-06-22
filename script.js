let myLibrary = []; 
let buttonAddBook = document.querySelector('.add-book');
const buttonSubmit = document.querySelector('.submit');
const booksContainer = document.querySelector('.booksContainer'); 
const closeSpan = document.querySelector('#close');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
}

function addBookToLibrary() {
    buttonSubmit.addEventListener('click', () => {
        document.getElementById('form').style.display = 'none';
        getInfoBook();
        deleteBooks(); 
        displayBooks();
    })
}

addBookToLibrary(); 

function getInfoBook() {
    let title = document.getElementById('title').value; 
        if (title === "") {
           alert('Title must be filled out');
        }
        let author = document.getElementById('author').value; 
        if (author === "") {
            alert('Author must be filled out'); 
        }
        let pages = document.getElementById('pages').value; 
        let read = document.querySelector('input[name="read"]:checked').value;
        let newBook = new Book(title, author, pages, read); 
        myLibrary.push(newBook); 
}

const showForm = function() {
   buttonAddBook.addEventListener('click', () => {
        document.getElementById('form').style.display = 'block'; 
   })
}
showForm(); 

closeSpan.onclick = function() {
    document.getElementById('form').style.display = 'none';
}

function displayBooks() {
    myLibrary.forEach(function(book, i) {
        //Create the main div and the div that will store the information
    
        const infoContainer = document.createElement('div'); 
        infoContainer.classList.add('info-container');
        infoContainer.setAttribute("data-index", `${i}`); 

        //Create the divs that will contain the author name, title and pages of the book
        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-info');

        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('book-info');

        const bookPages = document.createElement('div'); 
        bookPages.classList.add('book-info'); 

        const bookRead = document.createElement('div');
        bookRead.classList.add('book-info'); 
        
        //Create the spans for the headings
        const titleHeading = document.createElement('div');
        titleHeading.classList.add('heading-style');

        const authorHeading = document.createElement('div');
        authorHeading.classList.add('heading-style');

        const pagesHeading = document.createElement('div');
        pagesHeading.classList.add('heading-style');

        const readHeading = document.createElement('div');
        readHeading.classList.add('heading-style'); 

        //Add the headings 
        titleHeading.textContent = 'TITLE:';
        authorHeading.textContent = 'AUTHOR:';
        pagesHeading.textContent = 'NUMBER OF PAGES:'; 
        readHeading.textContent = 'Have you read this book?'

        const titleInput = document.createElement('div'); 
        titleInput.classList.add('input-style');

        const authorInput = document.createElement('div'); 
        authorInput.classList.add('input-style');

        const pagesInput = document.createElement('div');
        pagesInput.classList.add('input-style'); 

        const readInput = document.createElement('div');
        readInput.classList.add('input-style'); 

        titleInput.textContent = `${book.title}`;
        authorInput.textContent = `${book.author}`;
        pagesInput.textContent = `${book.pages}`;
        readInput.textContent = `${book.read}`;

        //Add delete button
        const btn = document.createElement('div');
        btn.classList.add('btn'); 
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn-style');
        deleteBtn.textContent = 'Delete'; 

        deleteBtn.addEventListener('click', function() {
            myLibrary.splice(`${i}`, 1);
            booksContainer.removeChild(infoContainer); 
        });
        
        btn.appendChild(deleteBtn);

       //Add button that changes read status 
       const readButton = document.createElement('button');
       readButton.classList.add('btn-style'); 
       readButton.textContent = 'Update';
       
       readButton.addEventListener('click', function() {
          if (`${book.read}` === 'Yes') {
            readInput.textContent = 'No'; 
            book.read = 'No';
          }
          else if (`${book.read}` === 'No') {
            readInput.textContent = 'Yes';
            book.read = 'Yes';
          }
       });

        btn.appendChild(readButton);

        infoContainer.appendChild(bookTitle);
        infoContainer.appendChild(bookAuthor);
        infoContainer.appendChild(bookPages); 
        infoContainer.appendChild(bookRead); 
        infoContainer.appendChild(btn);

        bookTitle.appendChild(titleHeading);
        bookAuthor.appendChild(authorHeading);
        bookPages.appendChild(pagesHeading);
        bookRead.appendChild(readHeading); 

        bookTitle.appendChild(titleInput);
        bookAuthor.appendChild(authorInput);
        bookPages.appendChild(pagesInput);
        bookRead.appendChild(readInput);

        booksContainer.appendChild(infoContainer); 
    }); 
}


function deleteBooks() {
    if (document.body.contains(document.querySelector('.info-container'))) {
        while (booksContainer.firstChild) {
            booksContainer.removeChild(booksContainer.lastChild)
        }
    } 
}

function changeReadStatus() {
    let r = document.querySelector('input[name="read"]:checked');
    if(r.value === 'Yes') {
        r.value= 'No';
    }
    if (r.value === 'No') {
        r.value = 'Yes'; 
    }   

}
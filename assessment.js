// Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.

 let library = [
  { title: "Born a crime", available: true },
  { title: "City hunter",  available: false },
  { title: "1984",  available: true },
  { title: "history book",  available: true },
  { title: "river nile",  available: false },
];

function getAvailableBooks() {
 
let  books = library.filter((book) => book.available === true);

  
  return books;
}


console.log(getAvailableBooks()); 

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
 let books = [
{title: "le pays de mille colline", time: 1997 },
{ title: "New born", time:1995 },
{ title: "New Rwanda", time:1895 },
{ title: "our history",  time:1999},
{ title: "river nile",  time:1878 },

 ];

 function getBooksavailable(Alex){
   for(book in books){
    
}


// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.

function checkoutBook(title) {
    
    const book = title.find((book) => book.title === title);
  
    if (!book) {
      return `Book '${title}' is not available.`;
    }
  
    book.available = false;
    return `checked out a book '${title}'.`;
  }

  let title = [
  { name: "Born a crime", available: true },
  { name:"City hunter",  available: false },
  { name: "1984",  available: true },
  { name: "history book",  available: true },
  { name: "river nile",  available: false },
];
console.log(checkoutBook(title))

// 5.Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.


function returnBook(title) {
  
  for (let i = 0; i < library.length; i++) {
   
    if (library[i].title === title) {
      library[i].isAvailable = true;
      return ` "${title}" book belongs to the library`;
    }
  }
  
  return `"${title}" does not belong to the library.`;
}
 
  

// const fetchBooks = async () => {
//   // To pass the tests, don't forget to return your fetch!
//   let request = await fetch("https://anapioficeandfire.com/api/books") // request from server/api
//   let response = await request.json() // grab data from server as an object
//   return fetch('https://anapioficeandfire.com/api/books')
// }

function fetchBooks() {
  
  return fetch ('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(json => renderBooks(json))
  

}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

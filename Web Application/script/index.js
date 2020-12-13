const categoryOneList = document.getElementById('category-one-list');   

GetBookCategoryOne();
function GetBookCategoryOne() {
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Xi0aAGR7vAPpM77687DIL0iAMLZjGcmj')
        .then((res) => res.json())
        .then((data) => {
         
            data.results.books.forEach(books => {

                const bookContainer = document.createElement('div');
                bookContainer.setAttribute('class', 'book-container')
                categoryOneList.appendChild(bookContainer);
              

                const bookImage = document.createElement('img');
                bookImage.srcset = books.book_image

                const bookTitle = document.createElement('h3');
                bookTitle.textContent = books.title;

                const bookAuthor = document.createElement('h4');
                bookAuthor.textContent = "by "+books.author;

                const bookDes = document.createElement('h5');
                bookDes.textContent = "by "+books.description;

                const bookBuy = document.createElement('a');
                bookBuy.textContent = "Buy";


                books.buy_links.forEach(links => {
                    const linkName = links.name;
                    if(linkName == "Amazon") {
                        const url = links.url;
                        bookBuy.href = url;
                    }
                })


                bookContainer.appendChild(bookImage);
                bookContainer.appendChild(bookTitle);
                bookContainer.appendChild(bookAuthor);
                bookContainer.appendChild(bookDes);
                bookContainer.appendChild(bookBuy);
               
            })
        })
}



const categoryTwoList = document.getElementById('category-two-list');   

GetBookCategoryTwo();
function GetBookCategoryTwo() {
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=Xi0aAGR7vAPpM77687DIL0iAMLZjGcmj')
        .then((res) => res.json())
        .then((data) => {
         
            data.results.books.forEach(books => {

                const bookContainer = document.createElement('div');
                bookContainer.setAttribute('class', 'book-container')
                categoryTwoList.appendChild(bookContainer);
              

                const bookImage = document.createElement('img');
                bookImage.srcset = books.book_image

                const bookTitle = document.createElement('h3');
                bookTitle.textContent = books.title;

                const bookAuthor = document.createElement('h4');
                bookAuthor.textContent = "by "+books.author;

                const bookDes = document.createElement('h5');
                bookDes.textContent = "by "+books.description;

                const bookBuy = document.createElement('a');
                bookBuy.textContent = "Buy";

                books.buy_links.forEach(links => {
                    const linkName = links.name;
                    if(linkName == "Amazon") {
                        const url = links.url;
                        bookBuy.href = url;
                    }
                })
            

                bookContainer.appendChild(bookImage);
                bookContainer.appendChild(bookTitle);
                bookContainer.appendChild(bookAuthor);
                bookContainer.appendChild(bookDes);
                bookContainer.appendChild(bookBuy);
               
            })
        })
}



const categorythreeList = document.getElementById('category-three-list');   

GetBookCategorythree();
function GetBookCategorythree() {
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=Xi0aAGR7vAPpM77687DIL0iAMLZjGcmj')
        .then((res) => res.json())
        .then((data) => {
         
            data.results.books.forEach(books => {

                const bookContainer = document.createElement('div');
                bookContainer.setAttribute('class', 'book-container')
                categorythreeList.appendChild(bookContainer);
              

                const bookImage = document.createElement('img');
                bookImage.srcset = books.book_image

                const bookTitle = document.createElement('h3');
                bookTitle.textContent = books.title;

                const bookAuthor = document.createElement('h4');
                bookAuthor.textContent = "by "+books.author;

                const bookDes = document.createElement('h5');
                bookDes.textContent = "by "+books.description;
              
                const bookBuy = document.createElement('a');
                bookBuy.textContent = "Buy";

             
                books.buy_links.forEach(links => {
                    const linkName = links.name;
                    if(linkName == "Amazon") {
                        const url = links.url;
                        bookBuy.href = url;
                    }
                })
               

                bookContainer.appendChild(bookImage);
                bookContainer.appendChild(bookTitle);
                bookContainer.appendChild(bookAuthor);
                bookContainer.appendChild(bookDes);
                bookContainer.appendChild(bookBuy);
               
            })
        })
}



const categoryFourList = document.getElementById('category-four-list');   

GetBookCategoryFour();
function GetBookCategoryFour() {
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade.json?api-key=Xi0aAGR7vAPpM77687DIL0iAMLZjGcmj')
        .then((res) => res.json())
        .then((data) => {
         
            data.results.books.forEach(books => {

                const bookContainer = document.createElement('div');
                bookContainer.setAttribute('class', 'book-container')
                categoryFourList.appendChild(bookContainer);
              

                const bookImage = document.createElement('img');
                bookImage.srcset = books.book_image

                const bookTitle = document.createElement('h3');
                bookTitle.textContent = books.title;

                const bookAuthor = document.createElement('h4');
                bookAuthor.textContent = "by "+books.author;

                const bookDes = document.createElement('h5');
                bookDes.textContent = "by "+books.description;
              
                const bookBuy = document.createElement('a');
                bookBuy.textContent = "Buy";

             
                books.buy_links.forEach(links => {
                    const linkName = links.name;
                    if(linkName == "Amazon") {
                        const url = links.url;
                        bookBuy.href = url;
                    }
                })
               

                bookContainer.appendChild(bookImage);
                bookContainer.appendChild(bookTitle);
                bookContainer.appendChild(bookAuthor);
                bookContainer.appendChild(bookDes);
                bookContainer.appendChild(bookBuy);
               
            })
        })
}




const categoryFiveList = document.getElementById('category-five-list');   

GetBookCategoryFive();
function GetBookCategoryFive() {
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/audio-fiction.json?api-key=Xi0aAGR7vAPpM77687DIL0iAMLZjGcmj')
        .then((res) => res.json())
        .then((data) => {
         
            data.results.books.forEach(books => {

                const bookContainer = document.createElement('div');
                bookContainer.setAttribute('class', 'book-container')
                categoryFiveList.appendChild(bookContainer);
              

                const bookImage = document.createElement('img');
                bookImage.srcset = books.book_image

                const bookTitle = document.createElement('h3');
                bookTitle.textContent = books.title;

                const bookAuthor = document.createElement('h4');
                bookAuthor.textContent = "by "+books.author;

                const bookDes = document.createElement('h5');
                bookDes.textContent = "by "+books.description;
              
                const bookBuy = document.createElement('a');
                bookBuy.textContent = "Buy";

             
                books.buy_links.forEach(links => {
                    const linkName = links.name;
                    if(linkName == "Amazon") {
                        const url = links.url;
                        bookBuy.href = url;
                    }
                })
               

                bookContainer.appendChild(bookImage);
                bookContainer.appendChild(bookTitle);
                bookContainer.appendChild(bookAuthor);
                bookContainer.appendChild(bookDes);
                bookContainer.appendChild(bookBuy);
               
            })
        })
}
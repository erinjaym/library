
let myLibrary = [] ;
let theDaruma = new Book("Sun Zu", "Darumas in War Time", 500, false );
let theBigSleep = new Book("Willy Wonka", "The Big Sleep", 200, false );
let id = ;

function Book(author, title, pageCount, beenRead)
{
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.beenRead = beenRead;
    this.info = function ()
    {
        return title + "," + author + "," + pageCount + "," + beenRead;
    }
    console.log(this.info());
}
console.log(theDaruma);
addBookToLibrary(theDaruma);
addBookToLibrary(theBigSleep);

function addBookToLibrary(book) 
{
    let bookPlacement = myLibrary.length;
    myLibrary[bookPlacement] = book;

}


displayLibrary();
function displayLibrary()
{

    console.log()
    for (let bookLocation = 0; bookLocation <= myLibrary.length-1; bookLocation++) // for each book in library
    {
        let bookInfoArray = myLibrary[bookLocation].info().split(',');
        console.log(bookInfoArray.length);
        let newRow = document.getElementById("books").insertRow();
        newRow.setAttribute("id", [bookLocation]);  // sets dom ID

            for (bookInfo = 0; bookInfo <= bookInfoArray.length-1; bookInfo ++ )// for each element in each book
            { 
            
                newRow.insertCell().textContent = bookInfoArray[bookInfo];
    
            }

                
    }

}

function newBook ()
{
  let auth = document.querySelector("div.bookentry-popup input[name='author']").value;
  let title = document.querySelector("div.bookentry-popup #booktitle").value;
  let pages = document.querySelector("div.bookentry-popup #pagecount").value;
  let beenRead = document.querySelector("div.bookentry-popup #yep").checked; 
  const newBook = new Book(auth, title, pages, beenRead) 
  console.log(newBook);
  addBookToLibrary(newBook);
  clearDisplay();
  displayLibrary();
}

function openForm() 
    {
    document.getElementById("bookentry").style.display = "block";
    }
  
  function closeForm() 
    {
    document.getElementById("bookentry").style.display = "none";
    }




function clearDisplay ()
{
        while (document.getElementById("books").lastChild)
            {
                document.getElementById("books").lastChild.remove();  
            }

                console.log("You are done");

}


function deleteBook (id) 
{
    document.getElementById(id).remove(); //remove from page display and dom
    console.log(myLibrary);
    myLibrary.splice(id, 1);        // remove from library
    console.log(myLibrary);
    clearDisplay();             // clear screen 
    displayLibrary();           // reassigns correct DOM ID and ensures page is shown correctly

} 



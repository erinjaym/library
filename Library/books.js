
let myLibrary = [] ;
let sharpie = new Book ("Samuel", "funkey munkey", 100, false);
let selectionId = null;

addBookToLibrary(sharpie);


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

    this.markRead =  function()
    {
        if(beenRead == false)
        {
            beenRead = true;
        }
        else
        {
            beenRead = false;
        }
      
    }

}

function addBookToLibrary(book) 
{
    let bookPlacement = myLibrary.length;
    myLibrary[bookPlacement] = book;

}


displayLibrary();
function displayLibrary()
{
//have to make delete book or Read it options in dom in each column 
    for (let bookLocation = 0; bookLocation <= myLibrary.length-1; bookLocation++) // for each book in library
    {
        let bookInfoArray = myLibrary[bookLocation].info().split(',');
        let newRow = document.getElementById("books").insertRow();
        newRow.setAttribute("id", [bookLocation]);  // sets dom ID

            for (bookInfo = 0; bookInfo <= bookInfoArray.length-1; bookInfo ++ )// for each element in each book
            { 
                newRow.insertCell().textContent = bookInfoArray[bookInfo];

            }
            // add book options buttons to table
           let readIt = document.createElement('button');
           readIt.textContent = "Read It";
           readIt.setAttribute("onclick", `changeReadStatus( ${newRow.id})`); 
           newRow.insertCell().appendChild(readIt);

           let remove = document.createElement('button'); 
           remove.className = "danger-button";
           remove.textContent = "Delete this book";
           console.log(newRow.id);
           remove.setAttribute("onclick", `deleteBook( ${newRow.id})`); 
           newRow.insertCell().appendChild(remove);

    }
}

function newBook ()
{
  let auth = document.querySelector("div.bookentry-popup input[name='author']").value;
  let title = document.querySelector("div.bookentry-popup #booktitle").value;
  let pages = document.querySelector("div.bookentry-popup #pagecount").value;
  let beenRead = document.querySelector("div.bookentry-popup #yep").checked; 
  const newBook = new Book(auth, title, pages, beenRead) 
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

}


function deleteBook (bookId) 
{
    document.getElementById(bookId).remove(); //remove from page display and dom
    myLibrary.splice(bookId, 1);        // remove from library
    clearDisplay();             // clear screen 
    displayLibrary();           // reassigns correct DOM ID and ensures page is shown correctly
     
} 


function deleteSelection ()
{

    if(selectionId === null) // no books selected
    {
      alert("Please select a book to delete first!");
    }
    else
    {
    document.getElementById(selectionId).remove(); //remove from page display and dom
    myLibrary.splice(selectionId, 1);        // remove from library
    clearDisplay();                 // clear screen 
    displayLibrary();           // reassigns correct DOM ID and ensures page is shown correctly
    selectionId = null;              // reset selector ID 
    }

}



function changeReadStatus (bookId)
{
myLibrary[bookId].markRead();
clearDisplay();
displayLibrary();
}

function changeSelectionStatus ()
{
myLibrary[selectionId].markRead();
clearDisplay();
displayLibrary();
}


document.getElementById("books").addEventListener('click', function (e)
{

    if (selectionId == null)
    {
        selectionId = (e.target.parentElement.id);
        e.target.parentElement.className = "bookSelection";

    }
    else 
    {
        let prevSelection = selectionId;
        selectionId = (e.target.parentElement.id);
        e.target.parentElement.className = "bookSelection";
        document.getElementById(prevSelection).className = ""; // conflict between selections and button on books. 
    }

});

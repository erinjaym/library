
let myLibrary = [] ;
let theDaruma = new Book("Sun Zu", "Darumas in War Time", 500, false );
let theBigSleep = new Book("Willy Wonka", "The Big Sleep", 200, false );

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

addBookToLibrary(theDaruma);

function addBookToLibrary(book) 
{
    let bookPlacement = myLibrary.length;
    myLibrary[bookPlacement] = book;
}


displayLibrary();
function displayLibrary()
{
    for (let bookLocation = 0; bookLocation <= myLibrary.length-1; bookLocation++) // for each book in library
    {
        let bookInfoArray = myLibrary[bookLocation].info().split(',');
        console.log(bookInfoArray.length);
        let newRow = document.getElementById("books").insertRow();
        newRow.setAttribute("id", [bookLocation]); 

            for (bookInfo = 0; bookInfo <= bookInfoArray.length-1; bookInfo ++ )// for each element in each book
            { 
            
                newRow.insertCell().textContent = bookInfoArray[bookInfo];
    
            }

                
    }

}

function newBook()
{
//Clear display crashes when there are no children to remove. 
//Glitch happens if there are books in the library that arent on screen
//may need to resolve but may not matter 
    let auth = prompt("Whos the Author?", "George foreman");
    let title = prompt("Title", "Foreman Grill");
    let pages = prompt("Pages?", "15");
    let beenRead = prompt("Have you read it?", "Yep");

    const newBook = new Book(auth, title, pages, beenRead)
    addBookToLibrary (newBook); 
    displayLibrary();


}


/*
//Clear display crashes when there are no children to remove. 
function clearDisplay ()
{
    if (myLibrary.length == 0) // base case for if there are no books clear doesnt cause a crash
    {

    }
    else 
    {
        for (let booksOnScreen = 0; booksOnScreen <= myLibrary.length-1; booksOnScreen++)
        console.log(booksOnScreen);
        {
        //document.getElementById("books").lastChild.remove();  
        }   
    }
}
*/

/* function delete (id) 
{
myLibrary.splice(id);
document.getElementById(id).remove();
clearDisplay();
displayLibrary();

} */
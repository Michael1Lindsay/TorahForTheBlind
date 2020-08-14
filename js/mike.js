//TODO:: Moshe
//1. Dynamically populate the book select with books from JSON
//2. When person selects a book, dynamically add the chapters to the second Chapter List select
//3. When a person selects a chapter from the select, call the sefaria api
//4. Update the page somewhere, with the text you got back from Sefaria


//Get the book list HTML Element, we'll store this globally to use later
let ul = document.getElementById('book-list');

//Helper function to create a new html fragment
function createNode(element) {
    return document.createElement(element);
}

//Helper function to append a fragment to a parent
function append(parent, el) {
    return parent.appendChild(el);
}

// 1. starts here
//When the document is ready, fetch the books json and populate the page
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('/js/books.json')
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (books) {

            //Populate a select box with id book-list-selector with the books

            //Populate a second select box with an id of chapter-list-selector
            //with the right number of chapters


            //Example Code, delete/amend to help you with the above
            return books.map(function (book) { //loop over the json array
                let li = createNode('li'), //create a new li tag
                    span = createNode('span'); //create a new span tag
                span.innerHTML = `${book.title} ${book.length}`; //fill the span tag with the data
                append(li, span); // add the new span to the li
                append(ul, li); // add the li to the ul that we defined at the top of file 'book-list'
            });
        });
});


//2. starts here
//Hook up a change even to the book list combo box
//We need to dynamically update the number of chapters in the chapter list
//when users change books
const listControl = document.getElementById('book-list-selector');
//This function fires when the select box is changed
listControl.addEventListener('change', (event) => {

    //1. Grab the value from the selected item book list(see code below)

    //2. fetch the books json and the 'length' property (see hint below)

    //-- OPTIONAL after you've got it working using fetch() --
    //HINT, Although we can fetch the json from the network every time we need it
    //it's a bit inefficient. Can we store the result somewhere in a global variable?)
    //-------

    //3. Create the correct number of <options> for each book



    //EXAMPLE CODE to help understand
    //Look for the the div with a class or result and update that with the
    //select change option value
    //this code is just for you to play with
    //delete when finished
    const result = document.querySelector('.result');
    result.textContent = `You like ${event.target.value}`;
});

//3 and 4. Start Here
//Finally using the code above create an event that listened
// for when the chapter list box is changed
// then get the book and chapter and call the sefaria api
//then update the page with the text
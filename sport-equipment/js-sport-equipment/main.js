window.addEventListener('load', init);

let limbUrl = '/CLE_3/sport-equipment/includes/actions-link.php';
let limbs;
let limbData = {};
let detailDialogue;
let favoriteItem;
let detailContent;
let todoItems = [];
let inputField;
let list;


/**
 * Initialize after the DOM is ready
 */
function init()
{
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    limbs = document.getElementById('limbs');
    limbs.addEventListener('click', limbClickHandler);

    detailDialogue = document.getElementById('limb-detail');
    detailContent = document.querySelector('.modal-content');
    detailDialogue.addEventListener('click', detailModalClickHandler);

    favoriteItem = document.getElementById('favorite');
    favoriteItem.addEventListener('click', addFavoriteItem);
    favoriteItem.addEventListener('click', favoriteClickHandler);

    //Connect variables with HTML elements
    let form = document.querySelector('#favorite-form');
    inputField = document.querySelector('#favorite-field');
    list = document.querySelector('#list');

    //Add event listeners for form & removal
    form.addEventListener('submit', formSubmitHandler);
    list.addEventListener('click', todoItemClickHandler);

    //Retrieve current items from local storage & add them to the list
    let todoItemsString = localStorage.getItem('todoItems');
    if (todoItemsString) { //Or: if (todoItemsString !== null) {
        todoItems = JSON.parse(todoItemsString);
        for (let todoItem of todoItems) {
            addTodoItem(todoItem);
        }
    }



    ajaxRequest(limbUrl, createLimbCards);
}

function ajaxRequest(url, successHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

function createLimbCards(data) {
console.log(data);
    for (let limb of data){
        let limbCard = document.createElement("div")
        limbCard.classList.add("limb-card")
        limbs.appendChild(limbCard);

        let title = document.createElement('h2');
        title.innerText = `${limb.naam}  (#${limb.id})`;
        limbCard.appendChild(title);

        let button = document.createElement('button');
        button.innerHTML = "Zie product";
        button.dataset.id = limb.id;
        limbCard.appendChild(button);
    }

}


// voor de button click event:
function limbClickHandler(e){

    let clickedItem = e.target;

    if (clickedItem.nodeName !== "BUTTON"){
        return;
    }

    //Get the information from the global stored data
    let limbId = clickedItem.dataset.id;
    ajaxRequest(`${limbUrl}?id=${limbId}`, getLimbDetail);

    detailDialogue.showModal();
    limbs.classList.add('dialog-open');

}

//om detail data te laten zien:
function getLimbDetail(limb){
    let limbCard = document.querySelector(`.modal-content`);

    limbCard.innerHTML = '';

    let title = document.createElement('h2');
    title.innerHTML = `${limb.naam}  (#${limb.tags})`;
    limbCard.appendChild(title);

    let text = document.createElement('p');
    text.innerHTML = `${limb.informatie}`;
    limbCard.appendChild(text);
    limbData[limb.id] = limb;

}


function ajaxErrorHandler(data){
    console.log(data);
    let error = document.createElement('div');
    error.innerText = "Er is iets helaas fout gegaan, probeer het later opnieuw.";
}


//clickhandler voor de detailmodal:
function detailModalClickHandler(e){
    let clickedItem = e.target;

    if (clickedItem.nodeName === "BUTTON" ||
        clickedItem.nodeName === "DIALOG"){
        detailDialogue.close();
    }
}

function favoriteClickHandler(e){
    let clickedItem = e.target;
    if (clickedItem.nodeName !== "BUTTON"){
        console.log(clickedItem);
    }
}

function addFavoriteItem(e){

}
function formSubmitHandler(e)
{
    e.preventDefault();

    //Check if the field is not empty
    let inputValue = inputField.value;
    if (inputValue !== '') {
        //Add to the HTML list & local storage
        addTodoItem(inputValue);
        todoItems.push(inputValue);
        localStorage.setItem('todoItems', JSON.stringify(todoItems));

        //Reset the field
        inputField.value = '';
        inputField.classList.remove('error');
    } else {
        //Add an error state with CSS
        inputField.classList.add('error');
    }
}

/**
 * Add a new item to the HTML
 *
 * @param todoText
 */
function addTodoItem(todoText)
{
    let listItem = document.createElement('li');
    listItem.innerText = todoText;
    list.appendChild(listItem);
}

/**
 * Remove the clicked list item
 *
 * @param e
 */
function todoItemClickHandler(e)
{
    let todoTarget = e.target;

    //Only continue if we clicked on a list item
    if (todoTarget.nodeName !== 'LI') {
        return;
    }

    //Remove from local storage
    let itemIndex = todoItems.indexOf(todoTarget.innerText);
    todoItems.splice(itemIndex, 1);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));

    //Remove from HTML
    todoTarget.remove();
}



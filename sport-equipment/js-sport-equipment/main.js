window.addEventListener('load', init);

let limbUrl = '/CLE_3/sport-equipment/includes/actions-link.php';
let limbs;
let limbData = {};
let detailDialogue;
let favoriteItem;
let detailContent;
let favoriteItems = [];
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
    favoriteItem.addEventListener('click', favoriteClickHandler);

    //Connect variables with HTML elements
    let form = document.querySelector('#favorite-form');
    inputField = document.querySelector('#favorite-field');
    list = document.querySelector('#list');

    //Add event listeners for form & removal
    detailContent.addEventListener('click', formSubmitHandler);
    list.addEventListener('click', favoriteItemClickHandler);

    //Retrieve current items from local storage & add them to the list
    let favoriteItemsString = localStorage.getItem('favoriteItems');
    if (favoriteItemsString) {
        favoriteItems = JSON.parse(favoriteItemsString);
        for (let favoriteItem of favoriteItems) {
            addFavoriteItem(favoriteItem);
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

    let button = document.createElement('button');
    button.innerHTML = "Toevoegen aan favoriet";
    button.dataset.id = limb.naam;
    limbCard.appendChild(button);

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

function formSubmitHandler(e)
{
    e.preventDefault();
    let clickedItem = e.target;

    if (clickedItem.nodeName !== "BUTTON" && clickedItem.classList.contains('modal-close')){
        return;
    }
    console.log(clickedItem.classList.contains('modal-close'));
    //Check if the field is not empty
    let inputValue = clickedItem.dataset.id;



    console.log(inputValue);
    if (inputValue !== '') {
        //Add to the HTML list & local storage
        addFavoriteItem(inputValue);
        favoriteItems.push(inputValue);
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));

        //Reset the field
        clickedItem.value = 'Toegevoegd!';
        clickedItem.classList.remove('error');
    } else {
        //Add an error state with CSS
        clickedItem.classList.add('error');
    }
}

/**
 * Add a new item to the HTML
 *
 * @param favoriteText
 */
function addFavoriteItem(favoriteText)
{
    let listItem = document.createElement('li');
    listItem.innerText = favoriteText;
    list.appendChild(listItem);
}

/**
 * Remove the clicked list item
 *
 * @param e
 */
function favoriteItemClickHandler(e)
{
    let favoriteTarget = e.target;

    //Only continue if we clicked on a list item
    if (favoriteTarget.nodeName !== 'LI') {
        return;
    }

    //Remove from local storage
    let itemIndex = favoriteItems.indexOf(favoriteTarget.innerText);
    favoriteItems.splice(itemIndex, 1);
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));

    //Remove from HTML
    favoriteTarget.remove();
}



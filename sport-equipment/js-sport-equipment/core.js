window.addEventListener('load', init);

let limbUrl = '/CLE_3/sport-equipment/includes/core-link.php';
let limbs;
let limbData = {};
let detailDialogue;
let favoriteItem;
let detailContent;


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
    detailDialogue.addEventListener('close', dialogCloseHandler);

    favoriteItem = document.getElementById('favorite');
    favoriteItem.addEventListener('click', addFavoriteItem);
    favoriteItem.addEventListener('click', favoriteClickHandler);



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

    let title = document.createElement('h2');
    title.innerHTML = `${limb.naam}  (#${limb.tags})`;
    limbCard.appendChild(title);

    let text = document.createElement('p');
    text.innerHTML = `${limb.informatie}`;
    limbCard.appendChild(text);
    limbData[limb.id] = limb;

    let button = document.createElement('button');
    button.innerHTML = "Voeg toe als favoriet";
    limbCard.appendChild(button);

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


function dialogCloseHandler(e)
{
    limbs.classList.remove('dialog-open');
}

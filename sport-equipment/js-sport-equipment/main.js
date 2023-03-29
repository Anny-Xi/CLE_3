window.addEventListener('load', init);

let limbUrl = '/CLE_3/sport-equipment/includes/actions-link.php';
let limbs;
let limbData = {};
let detailDialogue;
let detailContent;

/**
 * Initialize after the DOM is ready
 */
function init()
{
    limbs = document.getElementById('limbs');
    limbs.addEventListener('click', limbClickHandler);
    detailDialogue = document.getElementById('limb-detail');
    detailContent = document.querySelector('.modal-content');
    detailDialogue.addEventListener('click', detailModalClickHandler);
    // detailDialogue.addEventListener('close', dialogCloseHandler);
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
        title.innerText = `${limb.naam} (#${limb.id})`;
        limbCard.appendChild(title);

        let button = document.createElement('button');
        button.innerHTML = "Over product";
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

function getLimbDetail(limb){
    let limbCard = document.querySelector(`.modal-content`);

    let title = document.createElement('h2');
    title.innerHTML = `${limb.naam} (#${limb.tags})`;
    limbCard.appendChild(title);

    limbData[limb.id] = limb;
}

function ajaxErrorHandler(data){
    console.log(data);
    let error = document.createElement('div');
    error.innerText = "Er is iets helaas fout gegaan, probeer het later opnieuw.";
}

function detailModalClickHandler(e){
    let clickedItem = e.target;

    if (clickedItem.nodeName === "BUTTON" ||
        clickedItem.nodeName === "DIALOG"){
        detailDialogue.close();
    }
}

// function dialogCloseHandler(e)
// {
//     limbs.classList.remove('dialog-open');
// }
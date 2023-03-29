window.addEventListener('load', init);

let listString = ["slope", "wheelchairLift", "buildingLift", "disabledBathroom","wheelchairAcs", "automaticDoors", "manualDoors"];
let findSection;
let createDiv;
let createText
let createPic;

function init()
{
    recoverData();
}

function recoverData () {
    fetch('includes/sport-centre-link.php')
        .then( (response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then (getFormInput)
        .catch(ajaxErrorHandler);
}

function ajaxErrorHandler () {

    findSection = document.getElementById('filtered-result');
    createDiv = document.createElement('div');
    createDiv.classList.add('filtered-buildings');

    createText = document.createElement('span');
    createText.classList.add('sport-text-box');
    createText.innerHTML = 'Oeps! Er is iets mis gegaan. Probeer het later opnieuw.';

    findSection.appendChild(createDiv);
    createDiv.appendChild(createText);
}

function getFormInput () {
    for (let i = 0; i <= listString.length; i++) {
        let data = localStorage.getItem(listString[i])
        console.log(data);
    }
    uploadData();
}
function uploadData () {

    findSection = document.getElementById('filtered-result');
    createDiv = document.createElement('div');
    createDiv.classList.add('filtered-buildings');

    createText = document.createElement('span');
    createText.classList.add('sport-text-box');
    createText.innerText = 'boop';

    createPic = document.createElement('img');
    createPic.classList.add('sport-image');
    createPic.setAttribute('src', '');

    createDiv.appendChild(createText);
    findSection.appendChild(createDiv);
}

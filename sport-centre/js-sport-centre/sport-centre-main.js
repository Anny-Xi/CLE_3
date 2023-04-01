window.addEventListener('load', init);

let slope;
let wheelchairLift;
let buildingLift;
let disabledBathroom;
let wheelchairAcs;
let automaticDoors;
let manualDoors;
let sport;
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

function getFormInput (data) {
    slope = localStorage.getItem("slope");
    wheelchairLift = localStorage.getItem("wheelchairLift");
    buildingLift = localStorage.getItem("buildingLift");
    disabledBathroom = localStorage.getItem("disabledBathroom");
    wheelchairAcs = localStorage.getItem("wheelchairAcs");
    automaticDoors = localStorage.getItem("automaticDoors");
    manualDoors = localStorage.getItem("manualDoors");
    sport = localStorage.getItem("sport");

    console.log(data);


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

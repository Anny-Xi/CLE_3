window.addEventListener('load', init);

let jsonUrl = 'includes/sport-centre-link.php';
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
let createText;
let buildingData = {};





function init()
{
    //Retrieve gallery and add a click event for every building
    findSection = document.getElementById('filtered-result');
    findSection.addEventListener('click', buildingClickHandler);

//Retrieve modal elements, and add click event for closing modal
    detailDialog = document.getElementById('building-detail');
    detailContent = detailDialog.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', dialogCloseHandler);

    recoverData();
}

function recoverData () {
    fetch(jsonUrl)
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

function getFormInput(data) {
    let filterTrue = [];

    const keys = [
        "slope",
        "wheelchairLift",
        "buildingLift",
        "disabledBathroom",
        "wheelchairAcs",
        "automaticDoors",
        "manualDoors",
        "sport"
    ];

    keys.forEach(key => {
        const value = localStorage.getItem(key);
        if (value === "true") {
            filterTrue.push(key);
        }
    });

    let goodBuildings = data.filter(item => {
        return filterTrue.every(key => {
            return item[key] === true;
        });
    });

    console.log(goodBuildings);

    findSection = document.getElementById('filtered-result');

    for (let i = 0; i < goodBuildings.length; i++) {
        const building = goodBuildings[i];
        let createDiv = document.createElement('div');
        createDiv.classList.add('filtered-buildings');

        let createDivForText = document.createElement('div');
        createDivForText.classList.add('sport-text-box');

        let createDivForPicture= document.createElement('div');

        let createText = document.createElement('span');
        createText.classList.add("text-span");
        createText.innerHTML = building.name;

        let textLocation = document.createElement('span');
        textLocation.innerHTML = building.location;

        let createPic = document.createElement('img');
        createPic.classList.add('sport-image');
        createPic.setAttribute('src', 'photo-sport-centre/sportschool.jpg');

        let createButton = document.createElement('button');
        createButton.innerHTML = "Meer informatie";
        createButton.dataset.id = building.id;
        createDivForText.appendChild(createButton);

        createDivForPicture.appendChild(createPic);
        createDivForText.appendChild(createText);
        createDivForText.appendChild(textLocation);

        createDiv.appendChild(createDivForPicture);
        createDiv.appendChild(createDivForText);

        findSection.appendChild(createDiv);

        buildingData[building.id] = building;
    }
    buildingClickHandler();
}

function buildingClickHandler(e) {
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    //Get the information from the global stored data
    let building = buildingData[clickedItem.dataset.id];

    fetch(`${jsonUrl}?id=${building.id}`)
        .then( (response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then (getDetails)
        .catch(ajaxErrorHandler);
}

function getDetails (building) {
    console.log(building);

    let detailCard = document.querySelector(`.modal-content`);
    detailCard.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${building.name}`;
    detailContent.appendChild(title);

    let text = document.createElement('p');
    text.innerHTML = `${building.information}`;
    detailContent.appendChild(text);

    //Open the modal
    detailDialog.showModal();
    findSection.classList.add('dialog-open');
}

function detailModalClickHandler(e)
{
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

function dialogCloseHandler()
{
    findSection.classList.remove('dialog-open');
}
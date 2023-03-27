window.addEventListener('load', init);

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
        .then (filter)
        .catch(ajaxErrorHandler);
}

function ajaxErrorHandler (data) {
    console.log(data);

    findSection = document.getElementById('filtered-result');
    createDiv = document.createElement('div');
    createDiv.classList.add('filtered-buildings');

    createText = document.createElement('span');
    createText.classList.add('sport-text-box');
    createText.innerHTML = 'oeps, er is iets mis gegaan. Probeer het later opnieuw.';

    findSection.appendChild(createDiv);
    createDiv.appendChild(createText);
}

function filter (data) {
    console.log(data);

    findSection = document.getElementById('filtered-result');
    createDiv = document.createElement('div');
    createDiv.classList.add('filtered-buildings');

    createText = document.createElement('span');
    createText.classList.add('sport-text-box');
    createText.innerText = '';

    createPic = document.createElement('img');
    createPic.classList.add('sport-image');
    createPic.setAttribute('src', );

    createDiv.appendChild(createText);
    findSection.appendChild(createDiv);
}

test
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
    fetch('sport-centre/filtered-buildings.php')
        .then( (response) => {
            if(!response.ok) {
                console.log('test')
                throw new Error(response.statusText);
            }
            console.log('test2')
            return response.json();
        })
        .then (filter)
        .catch(ajaxErrorHandler);
}

function ajaxErrorHandler (data) {
    console.log(data);
    console.log('heheheh');

    findSection = document.getElementsByClassName('filtered-result')
    createDiv = document.createElement('div');
    createDiv.classList.add('errorContainer');
    createText = document.createElement('span');
    createText.innerHTML('oeps, er is iets mis gegaan. Probeer het later opnieuw.');
    createDiv.appendChild(createText);
    findSection.appendChild(createDiv);
}

function filter (data) {
    console.log(data);
    console.log('haahahaha');

    findSection = document.getElementsByClassName('filtered-result')
    createDiv = document.createElement('div');
    createDiv.classList.add('filtered-buildings');

    createText = document.createElement('span');
    createText.classList.add('sport-text-box')
    createText.innerText('oeps, er is iets mis gegaan. Probeer het later opnieuw.');

    createPic = document.createElement('img')
    createPic.classList.add('sport-image')
    createPic.setAttribute('src', comeslater);

    createDiv.appendChild(createText);
    findSection.appendChild(createDiv);



}
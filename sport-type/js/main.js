window.addEventListener('load', init);

//Globals
let apiUrl = "sport_types.php"
let sportData = {}

let mainPage
let sportContainer
let detailDialog;
let detailContent;


/**
 * Initialize after the DOM is ready
 */
function init() {
    mainPage = document.getElementById("main_sport_type")
    mainPage.addEventListener('click',sportClickHandler)

    sportContainer = document.getElementById("Sport_List")


    //Retrieve modal elements, and add click event for closing modal
    detailDialog = document.getElementById('sport-detail');
    detailContent = detailDialog.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', dialogCloseHandler);


    //Start the application with loading the API data
    fetchApi(apiUrl, getSport)

}

/**
 * Fetch function require, url succesHandler & errorHandler
 */
function fetchApi(apiUrl, successHandler) {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then(successHandler)
        .catch(getSportErrorHandler)

}


/**
 * Do the actual AJAX call to the provided URL
 */
function getSport(data) {

    //Loop through the list of sport
    for (let sport of data.Sport) {

        let sportCard = document.createElement('div');
        sportCard.classList.add('sport-card');
        sportCard.dataset.name = sport.naam;

        //Append sport card to the actual HTML -> Main sport list
        mainPage.appendChild(sportCard)

        let sportUrl = `sport_types.php?id=${sport.id}`

        //Retrieve the detail information from the API
        fetchApi(sportUrl, fillSportCard)
    }
}

/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param sport
 */
function fillSportCard(sport) {

    console.log(sport.naam)

    //Wrapper element for every sport card
    let sportCard = document.querySelector(`.pokemon-card[data-name='${sport.naam}']`);

    //Element for the name of the Pokémon
    let title = document.createElement('h2');
    title.innerHTML = `${sport.id}`;
    // sportCard.appendChild(title);

    // //Element for the image of the Pokémon
    // let image = document.createElement('img');
    // image.src = pokemon.sprites.other.home.front_default;
    // sportCard.appendChild(image);

    //Element for the button to load detail about that pokemon
    let button = document.createElement('button');
    button.innerHTML = 'Show Detail';
    button.dataset.id = sport.id;

    // sportCard.appendChild(button);

    //Store Pokémon data globally for later use in other functions
    // pokemonData[sport.id] = sport;
}

/**
 * Open the detailview with information of a Pokémon
 *
 * @param e
 */
function sportClickHandler(e)
{
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    //Get the information from the global stored data
    let pokemon = pokemonData[clickedItem.dataset.id];

    //Reset the content
    detailContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${pokemon.name} (#${pokemon.id})`;
    detailContent.appendChild(title);

    //Display the shiny
    let shiny = document.createElement('img');
    shiny.src = pokemon.sprites.other.home.front_shiny;
    detailContent.appendChild(shiny);

    //Open the modal
    detailDialog.showModal();
    gallery.classList.add('dialog-open');
}


/**
 * Do something useful with the error you got back from the API
 *
 * @param data
 */
function getSportErrorHandler(data) {
    console.log(data);
    let error = document.createElement('div')
    error.innerHTML = "Er gaat iets fout!"
    mainPage.before(error)
}

/**
 * Close the modal if clicked on the close button or outside the modal (on the backdrop)
 *
 * @param e
 */
function detailModalClickHandler(e)
{
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

/**
 * Close the underlying blur effect when dialog is closed (both on our own click or the native ESC key)
 *
 * @param e
 */
function dialogCloseHandler(e)
{
    gallery.classList.remove('dialog-open');
}
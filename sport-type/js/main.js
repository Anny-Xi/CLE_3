window.addEventListener('load', init);

//Globals
let apiUrl = "sport_types.php"
let sportData = {}

let mainList

let openSportForm

let sportContainer
let detailDialog;
let detailContent;


/**
 * Initialize after the DOM is ready
 */
function init() {
    mainList = document.getElementById("Sport_List")
    mainList.addEventListener('click',sportClickHandler)

    sportContainer = document.getElementById("Sport_List")

    //Retrieve modal elements for detail sport, and add click event for closing modal
    detailDialog = document.getElementById('sport-detail');
    detailContent = detailDialog.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', dialogCloseHandler);


    //js handler to get if the openform button has been clicked
    openSportForm = document.getElementById("open_form")
    openSportForm.addEventListener('click',openForm)


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
        .catch(ajaxErrorHandler)

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
        mainList.appendChild(sportCard)

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

    //Wrapper element for every sport card
    let sportCard = document.querySelector(`.sport-card[data-name='${sport.naam}']`);

    //Element for the name of the Sport
    let title = document.createElement('h2');
    title.innerHTML = `${sport.naam}`;
    sportCard.appendChild(title);

    // //Element for the image of the sport
    // let image = document.createElement('img');
    // image.src = pokemon.sprites.other.home.front_default;
    // sportCard.appendChild(image);

    //Element for the button to load detail about that sport
    let button = document.createElement('button');
    button.innerHTML = 'Show Detail';
    button.dataset.id = sport.id;

    sportCard.appendChild(button);

    //Store sport data globally for later use in other functions
    sportData[sport.id] = sport;

}

/**
 * Open the detailview with information of a sport
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
    let sport = sportData[clickedItem.dataset.id];

    //Reset the content
    detailContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${sport.naam}`;
    detailContent.appendChild(title);

    //Show the text we used as description
    let description = document.createElement('p');
    description.innerHTML = `Over dit sport: ${sport.beschrijving}`;
    detailContent.appendChild(description);

    //Show the text we used as limit on legs
    let limitLeg = document.createElement('p');
    limitLeg.innerHTML = `Geschikt voor deze niveau van beperking met benen: ${sport.Benen}`;
    detailContent.appendChild(limitLeg);

    //Show the text we used as limit on arms
    let limitArm = document.createElement('p');
    limitArm.innerHTML = `Geschikt voor deze niveau van beperking met armen: ${sport.Armen}`;
    detailContent.appendChild(limitArm);

    //here comes localstorage function

    //Open the modal
    detailDialog.showModal();
    mainList.classList.add('dialog-open');
}

/**
 * Open the form page with quiz list
 *
 *
 */
function openForm()
{
    window.location.href = "sportForm.php";
}



/**
 * Do something useful with the error you got back from the API
 *
 * @param data
 */
function ajaxErrorHandler(data) {
    console.log(data);
    let error = document.createElement('div')
    error.innerHTML = "Er gaat iets fout!"
    mainList.before(error)
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
        quizDialog.close();
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
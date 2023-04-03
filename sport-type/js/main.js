window.addEventListener('load', init);

//Globals
let apiUrl = "sport_types.php"

let mainPage
let sportContainer



/**
 * Initialize after the DOM is ready
 */
function init()
{
    mainPage = document.getElementById("main_sport_type")

    sportContainer = document.getElementById("Sport_List")

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

    // console.log(data)

    //Loop through the list of sport
    for (let sport of data.Sport) {

        let sportCard = document.createElement('div');
        sportCard.classList.add('pokemon-card');
        sportCard.dataset.name = sport.naam;

        //Append Sport card to the actual HTML
        sportContainer.appendChild(sportCard);

        let sportUrl = `sport_types.php?id=${sport.id}`
        console.log(sportUrl)

        //Retrieve the detail information from the API
        fetchApi(sportUrl, getSportSuccessHandler)
    }
}

/**
 * Do something nice with the data you got from the external API
 *
 * @param data
 */
function getSportSuccessHandler(data) {
    console.log(data)
    let sport = data

    console.log(sport)
    console.log(sport.naam)

    let div = document.createElement('div')

    let h2 = document.createElement('h2')
    h2.innerText = `${pokemon.name} (#${pokemon.id})`
    div.appendChild(h2)

}

function getSportDetailSuccessHandler(sport) {
    console.log(pokemon)
    console.log(pokemon.name, "#", pokemon.id)
    console.log(pokemon.sprites.other.home.front_default)

    //!!!!!!!
    let card = document.querySelector(`.pokemon-card[data-name ="${pokemon.name}"]`)
    //!!!

    let h2 = document.createElement('h2')
    h2.innerText = `${pokemon.name} (#${pokemon.id})`
    card.appendChild(h2)

    let img = document.createElement('img')
    img.src = pokemon.sprites.other.home.front_default
    card.appendChild(img)
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
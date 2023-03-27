window.addEventListener('load', init);

//Globals
let apiUrl = '../includes/action.php'
// let galary

/**
 * Initialize after the DOM is ready
 */
function init()
{
    galary = document.getElementById("pokemon-gallery")
    getSport()
}

/**
 * Do the actual AJAX call to the provided URL
 */
function getSport() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then(getPokemonsSuccessHandler)
        .catch(getPokemonsErrorHandler)
}

/**
 * Do something nice with the data you got from the external API
 *
 * @param data
 */
function getPokemonsSuccessHandler(data) {
    console.log(data);
    for (const pokemon of data.results){
        console.log(pokemon)
        let div = document.createElement('div')
        div.classList.add('pokemon-card')
        //!!
        div.dataset.name = pokemon.name

        galary.appendChild(div)

        fetch(pokemon.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            })
            .then(getPokemonDetailSuccessHandler)
    }
}

function getPokemonDetailSuccessHandler(pokemon) {
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
 * Do something useful with the error you got back from the external API
 *
 * @param data
 */
function getPokemonsErrorHandler(data) {
    console.log(data);
    let error = document.createElement('div')
    error.innerHTML = "Er gaat iets fout!"
    galary.before(error)
}
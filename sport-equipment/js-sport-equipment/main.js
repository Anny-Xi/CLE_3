window.addEventListener('load', init);

let limbs;

/**
 * Initialize after the DOM is ready
 */
function init()
{
    limbs = document.getElementById('limbs');
    getLimbData();

}

function getLimbData(){
    fetch('/CLE_3/sport-equipment/includes/actions-link.php')
        .then((response)=> {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createLimbCards)
        .catch(ajaxErrorHandler);

}

function createLimbCards(data) {
console.log(data);
    for (let limb of data){
        let limbCard = document.createElement("div")
        limbCard.classList.add("limb-card")
        limbCard.dataset.name = limb.naam;
        limbs.appendChild(limbCard);
fillLimbCard(limb);
    }


}

function fillLimbCard(data){
    console.log(data.id);
    console.log(data.naam);

    let limbCard = document.querySelector('div.limb-card[data-name='+data.naam+']');
    console.log(limbCard);
    let title = document.createElement('h2');
    title.innerText = `${data.naam} (#${data.id})`;
    limbCard.appendChild(title);
}

function ajaxErrorHandler(data){
    console.log(data);
    let error = document.createElement('div');
    error.innerText = "Er is iets helaas fout gegaan, probeer het later opnieuw.";
}

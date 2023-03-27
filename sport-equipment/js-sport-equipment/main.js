window.addEventListener('load', init);

/**
 * Initialize after the DOM is ready
 */
function init()
{
    getLimbData();

}

function getLimbData(){
    fetch('includes/actions-link.php')
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
    for (let limb of data.results){
        let limbCard = document.createElement("div")
        limbCard.classList.add("limb-card")
        limbCard.dataset.name = limb.name;

        fetch(limb.url)
            .then((response)=> {
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(fillLimbCard)
            .catch(ajaxErrorHandler);


    }


}

function fillLimbCard(data){
    console.log(data.id);
    console.log(data.name);

    let limbCard = document.querySelector('.limb-card[data-name='+data.name+']');
    let title = document.createElement('h2');
    title.innerText = `${data.name} (#${data.id})`;
    limbCard.appendChild(title);
}

function ajaxErrorHandler(data){
    console.log(data);
    let error = document.createElement('div');
    error.innerText = "Er is iets helaas fout gegaan, probeer het later opnieuw.";
}

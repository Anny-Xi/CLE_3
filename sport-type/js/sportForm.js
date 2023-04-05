window.addEventListener('load', init);

let sportForm
let formData = []

let  backButton

/**
 * Initialize after the DOM is ready
 */
function init() {

    sportForm = document.getElementById('sport_form');
    backButton = document.getElementById('backToPrevious')
    sportForm.addEventListener('submit', SportFormInput)
    backButton.addEventListener('click',goBack)

}

function SportFormInput (e) {

    //Prevent default form submit
    e.preventDefault()

    let option

    let been = document.querySelector('input[name="been"]:checked').value;
    // console.log(been)

    let arm = document.querySelector('input[name="arm"]:checked').value;
    // console.log(arm)

    let location = document.querySelector('input[name="binnen_buiten"]:checked').value;

    switch (been) {
        case "geen beperking":
            console.log("geen beperking aan benen");
            break;
        case "licht beperkt":
            console.log("licht beperking aan benen");
            break;
        case "beperkt":
            console.log("beperkt beperking aan benen");
            break;
        case "erg beperkt":
            console.log("erg beperking aan benen");
            break;
    }

    switch (arm) {
        case "geen beperking":
            console.log("geen beperking aan arm");
            break;
        case "licht beperkt":
            console.log("licht beperking aan arm");
            break;
        case "beperkt":
            console.log("beperkt beperking aan arm");
            break;
        case "erg beperkt":
            console.log("erg beperking aan arm");
            break;
    }

    switch (location) {
        case "buiten":
            console.log("buiten");
            break;
        case "binnen":
            console.log("binnen");
            break;
        case "binnen en buiten":
            console.log("binnen en buiten");
            break;
    }

    // for(let i = 0; i < been.length; i++) {
    //     if(been[i].checked) {
    //         optie = been[i].value;
    //         console.log(optie)
    //         formData.push(optie)
    //         console.log(formData)
    //     }
    // }




    // localStorage.setItem(listString[7], document.getElementById(listString[7]).value);
    // for (let i = 1; i < listString.length; i++) {
    //     localStorage.setItem(listString[i], document.getElementById(listString[i]).checked);
    // }
    // location.href="resultQuiz.php";
}


function goBack(e) {

    e.preventDefault();
    window.history.back();
}
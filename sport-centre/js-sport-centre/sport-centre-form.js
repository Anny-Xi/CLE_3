// form
window.addEventListener('load', init);

let listString = ["sport", "slope", "wheelchairLift", "buildingLift", "disabledBathroom","wheelchairAcs", "automaticDoors", "manualDoors"];
let filterForm;


function init () {
    filterForm = document.getElementById('filter-form');
    filterForm.addEventListener('submit', setFormInput);

}

function setFormInput (e) {
    e.preventDefault();

    localStorage.setItem(listString[7], document.getElementById(listString[7]).value);
    for (let i = 1; i < listString.length; i++) {
        localStorage.setItem(listString[i], document.getElementById(listString[i]).checked);
    }
    location.href="filtered-buildings.php";
}

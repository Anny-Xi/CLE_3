window.addEventListener('load', init);

let listString = ["slope", "wheelchairLift", "buildingLift", "disabledBathroom","wheelchairAcs", "automaticDoors", "manualDoors"];
let filterForm;


function init () {
    filterForm = document.getElementById('filter-form');
    filterForm.addEventListener('submit', setFormInput);

}

function setFormInput (e) {
    e.preventDefault();

    for (let i = 0; i < listString.length; i++) {
        localStorage.setItem(listString[i], document.getElementById(listString[i]).checked);
    }
    location.href="filtered-buildings.php";
}

window.addEventListener('load', init);

let jsonUrl = 'includes/sport-centre-link.php';
let slope;
let wheelchairLift;
let buildingLift;
let disabledBathroom;
let wheelchairAcs;
let automaticDoors;
let manualDoors;
let sport;
let findSection;
let createDiv;
let createText


function init()
{
    recoverData();
}

function recoverData () {
    fetch(jsonUrl)
        .then( (response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then (getFormInput)
        .catch(ajaxErrorHandler);
}

function ajaxErrorHandler () {
    findSection = document.getElementById('filtered-result');
    createDiv = document.createElement('div');
    createDiv.classList.add('filtered-buildings');

    createText = document.createElement('span');
    createText.classList.add('sport-text-box');
    createText.innerHTML = 'Oeps! Er is iets mis gegaan. Probeer het later opnieuw.';

    findSection.appendChild(createDiv);
    createDiv.appendChild(createText);
}

function getFormInput(data) {
    let filterTrue = [];

    const keys = [
        "slope",
        "wheelchairLift",
        "buildingLift",
        "disabledBathroom",
        "wheelchairAcs",
        "automaticDoors",
        "manualDoors",
        "sport"
    ];

    keys.forEach(key => {
        const value = localStorage.getItem(key);
        if (value === "true") {
            filterTrue.push(key);
        }
    });

    let goodBuildings = data.filter(item => {
        return filterTrue.every(key => {
            return item[key] === true;
        });
    });

    console.log(goodBuildings);

    findSection = document.getElementById('filtered-result');

    for (let i = 0; i < goodBuildings.length; i++) {
        const building = goodBuildings[i];
        let createDiv = document.createElement('div');
        createDiv.classList.add('filtered-buildings');

        let createDivForText = document.createElement('div');
        createDivForText.classList.add('sport-text-box');

        let createDivForPicture= document.createElement('div');

        let createText = document.createElement('span');
        createText.classList.add("text-span");
        createText.innerHTML = building.name;

        let textLocation = document.createElement('span');
        textLocation.innerHTML = building.location;

        let createPic = document.createElement('img');
        createPic.classList.add('sport-image');
        createPic.setAttribute('src', 'photo-sport-centre/sportschool.jpg');

        let createButton = document.createElement('button');
        createButton.innerHTML = "Meer informatie";
        createButton.dataset.id = building.id;
        createDivForText.appendChild(createButton);

        createDivForPicture.appendChild(createPic);
        createDivForText.appendChild(createText);
        createDivForText.appendChild(textLocation);

        createDiv.appendChild(createDivForPicture);
        createDiv.appendChild(createDivForText);

        findSection.appendChild(createDiv);
    }

}




















// slope = localStorage.getItem("slope");
// wheelchairLift = localStorage.getItem("wheelchairLift");
// buildingLift = localStorage.getItem("buildingLift");
// disabledBathroom = localStorage.getItem("disabledBathroom");
// wheelchairAcs = localStorage.getItem("wheelchairAcs");
// automaticDoors = localStorage.getItem("automaticDoors");
// manualDoors = localStorage.getItem("manualDoors");
// sport = localStorage.getItem("sport");
//
//
// let filterTrue = [sport];
// let goodBuildings;
// slope = localStorage.getItem("slope");
// wheelchairLift = localStorage.getItem("wheelchairLift");
// buildingLift = localStorage.getItem("buildingLift");
// disabledBathroom = localStorage.getItem("disabledBathroom");
// wheelchairAcs = localStorage.getItem("wheelchairAcs");
// automaticDoors = localStorage.getItem("automaticDoors");
// manualDoors = localStorage.getItem("manualDoors");
// sport = localStorage.getItem("sport");
//
// switch(true) {
//     case slope:
//         filterTrue.push(slope);
//         break;
//     case wheelchairLift:
//         filterTrue.push(wheelchairLift);
//         break;
//     case buildingLift:
//         filterTrue.push(buildingLift);
//         break;
//     case disabledBathroom:
//         filterTrue.push(disabledBathroom);
//         break;
//     case wheelchairAcs:
//         filterTrue.push(wheelchairAcs);
//         break;
//     case automaticDoors:
//         filterTrue.push(automaticDoors);
//         break;
//     case manualDoors:
//         filterTrue.push(manualDoors);
//         break;
// }
//
// goodBuildings = data.filter((item) => {
//     console.log(item.slope && slope)
//     if (item.slope && slope === 'true') return true;
//     })
//
//
// console.log(goodBuildings);
// uploadData();
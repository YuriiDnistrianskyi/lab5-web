/*import { postStadium } from "./api.js";
import { refetchAllStadiums } from "./index.js";*/

//import { getAllStadiums, postStadium, deleteStadium } from '/api.js';

let sort = false;

function searchStadium() {
    let numberDefinedName = 0;
    const searchName = document.getElementById('search-name').value;
    const stadiums = Array.from(document.getElementsByClassName('stadium-box'));

    stadiums.forEach((stadium) => {
        const currentName = stadium.querySelector('h2').textContent;
        if (currentName.includes(searchName)) {
            stadium.style.display = 'flex';
            numberDefinedName += 1;
        } else {
            stadium.style.display = 'none';
        }
    });

    if (numberDefinedName === 0) {
        alert("Element si not find");
    }
} 


function clearSearch() {
    document.getElementById('search-name').value = '';
    const stadiums = document.querySelectorAll('.stadium-box');
    stadiums.forEach(stadium => {
        stadium.style.display = 'flex';
    })
}


function countAudience() {
    const stadiums = Array.from(document.getElementsByClassName('stadium-box'));

    const sum = stadiums.reduce((acc, stadium) => {
        acc += parseFloat(stadium.querySelector('p').textContent.replace("audience: ", ""));
        return acc;
    }, 0);

    const resultCount = document.getElementById('result-count');
    resultCount.textContent = "Total: " + sum;
}


function startSort() {
    const button = document.getElementById('sort');

    if (sort) {
        sort = false;
        button.style.background = '#ffffff';
    } else {
        sort = true;
        button.style.background = 'rgb(96, 180, 146)'
        sortElements();
    }
}


function sortElements() {
    const container = document.getElementById('container-stadiums');
    const items = Array.from(container.getElementsByClassName('stadium-box'));

    items.sort((a, b) => {
        const powerA = parseInt(a.querySelectorAll('p')[1].textContent.replace('lighting power: ', '').replace(' suites', ''));
        const powerB = parseInt(b.querySelectorAll('p')[1].textContent.replace('lighting power: ', '').replace(' suites', ''));
        return powerA - powerB;
    });

    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
}


function addElement() {
    const container = document.getElementById("container-stadiums");
    const inputName = document.getElementById("name-create").value;
    const inputNumberOfAudience = document.getElementById("numberOfAudience-create").value;
    const inputLightingPower = document.getElementById("lightingPower-create").value;

    /*postStadium({
        inputName,
        inputNumberOfAudience,
        inputLightingPower,
    }).then(refetchAllStadiums);*/

    if (inputNumberOfAudience == "" || inputName == "" || inputLightingPower == "") {
        alert("Not all data is entered");
    } else {
        const newElement = document.createElement('div');
        newElement.classList.add('stadium-box');

        newElement.setAttribute('data-name', inputName);

        newElement.innerHTML = `
            <h2>${inputName}</h2>
            <p>audience: ${inputNumberOfAudience}</p>
            <p>lighting power: ${inputLightingPower} suites</p>
            <div class="stadium-buttons">
                <button class="edit-button">Edit</button>
                <button class="remove-button">Remove</button>
            </div>
        `
        
        newElement.querySelector('.remove-button').onclick = function() {
            container.removeChild(newElement);
        }
        
        newElement.querySelector('.edit-button').onclick = function() {
            navigateTo('edit-page', 'menu-edit');
            document.getElementById("name-edit").value = inputName;
            document.getElementById("numberOfAudience-edit").value = inputNumberOfAudience;
            document.getElementById("lightingPower-edit").value = inputLightingPower;

            document.getElementById('edit-button-page').onclick = function() {
                const newName = document.getElementById("name-edit").value;
                const newNumberOfAudience = document.getElementById("numberOfAudience-edit").value;
                const newLightingPower = document.getElementById("lightingPower-edit").value;
            
                const stadiumBox = document.querySelector(`.stadium-box[data-name="${inputName}"]`);

                if (stadiumBox) {
                    stadiumBox.querySelector('h2').innerText = newName
                    stadiumBox.querySelectorAll('p')[0].textContent = `audience: ${newNumberOfAudience}`;
                    stadiumBox.querySelectorAll('p')[1].textContent = `${newLightingPower} suites`

                    stadiumBox.setAttribute('data-name', newName);
                }
            
                document.getElementById("name-edit").value = "";
                document.getElementById("numberOfAudience-edit").value = "";
                document.getElementById("lightingPower-edit").value = "";
            }
        }

        container.appendChild(newElement);

        document.getElementById("numberOfAudience-create").value = "";
        document.getElementById("name-create").value = "";
        document.getElementById("lightingPower-create").value = "";

        if (sort) {
            sortElements();
        }
    }
}

function clearInputCreate() {
    document.getElementById('name-create').value = "";
    document.getElementById('numberOfAudience-create').value = "";
    document.getElementById('lightingPower-create').value = "";
}


function clearInputEdit() {
    document.getElementById("name-edit").value = "";
    document.getElementById("numberOfAudience-edit").value = "";
    document.getElementById("lightingPower-edit").value = ""
}

function navigateTo(pageId, menuItemId) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(menuItem => {
        menuItem.classList.remove('open');
    });
    const a = document.getElementById(menuItemId);
    a.classList.add('open');

    const pages = document.querySelectorAll('.container__page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const currentPage = document.getElementById(pageId);
    currentPage.style.display = 'flex';
}

/*-------------------------------------------------------------------------------------------------------------- */

const BASE_URL = 'http://127.0.0.1:5000/';
const RESOURSE_URL = `${BASE_URL}/stadium`;

const baseRequest = async ({urlPath = "", method = 'Get', body = null}) => { //post and put
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);

    } catch (error) {

    }
}

export const getAllStadiums = async () => {
    const rawResponse = await baseRequest({ method: 'GET'});

    return rawResponse.json();
}

export const postStadium = async (body) => baseRequest({method: 'POST', body});

export const editStadium = async (id, body) => baseRequest({urlPath: `/${id}`, method: "PUT", body})

export const deleteStadium = async (id) => baseRequest({urlPath: `/${id}`, method: "DELETE"}); // Якщо видаляти за id


/*-------------------------------------------------------------------------------------------------------------- */

let stadiums = [];

const refetchAllStadiums = async () => {
    const allStadiums = await getAllStadiums();

    stadiums = allStadiums;

    renderItemsList(stadiums);
}

const onRemove = async (element) =>
    deleteStadium(element.target.id).then(refetchAllStadiums)

refetchAllStadiums();

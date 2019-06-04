let $addBtn, $list;

function main() {
    searching();
    changing();
    addingListeners();
}

function searching() {
    $addBtn = document.querySelector('#addForm .addBtn');
    $list = document.getElementById('list');
}

function changing() {
    $addBtn.style.color = 'blue';
    $addBtn.innerText = 'Dodaj';
}

function addingListeners() {
    $addBtn.addEventListener('click', creatingElements);
}

function creatingElements(e) {
    let newListElement = document.createElement('li');
    newListElement.innerText = 'Nowo dodany';
    newListElement.style.color = 'green';

    $list.appendChild(newListElement);
    // $list.innerHTML += newListElement.outerHTML;
}

// main();
document.addEventListener('DOMContentLoaded', main);
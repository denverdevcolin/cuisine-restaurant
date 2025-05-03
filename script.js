
// hamburger nav //

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


// menu highlight //

// onclick, add class for orange text and bottom border
// remove black border?

function toggleBreakfast() {
    let element = document.getElementById("breakfast");
    element.classList.toggle("orange-text-active");

  }

function toggleLunch() {
    let element = document.getElementById("lunch");
    element.classList.toggle("orange-text-active");
}

function toggleDinner() {
    let element = document.getElementById("dinner");
    element.classList.toggle("orange-text-active");
}

function toggleDessert() {
    let element = document.getElementById("dessert");
    element.classList.toggle("orange-text-active");
}

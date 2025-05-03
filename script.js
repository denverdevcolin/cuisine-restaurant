
// hamburger nav //

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


// menu highlight //

let breakfast = document.getElementById("breakfast");
let lunch = document.getElementById("lunch");
let dinner = document.getElementById("dinner");
let dessert = document.getElementById("dessert");

function toggleBreakfast() {
    breakfast.classList.add("orange-text-active");
    lunch.classList.remove("orange-text-active");
    dinner.classList.remove("orange-text-active");
    dessert.classList.remove("orange-text-active");
}

function toggleLunch() {
    breakfast.classList.remove("orange-text-active");
    lunch.classList.add("orange-text-active");
    dinner.classList.remove("orange-text-active");
    dessert.classList.remove("orange-text-active");
}

function toggleDinner() {
    breakfast.classList.remove("orange-text-active");
    lunch.classList.remove("orange-text-active");
    dinner.classList.add("orange-text-active");
    dessert.classList.remove("orange-text-active");
}

function toggleDessert() {
    breakfast.classList.remove("orange-text-active");
    lunch.classList.remove("orange-text-active");
    dinner.classList.remove("orange-text-active");
    dessert.classList.add("orange-text-active");
}

// navbar code starts here


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// navbar code ends here

// hero section starts here

const vehicles = [

    "assets/images/vehicles/victory.png",
    "assets/images/vehicles/breeze-removebg-preview.png",
    "assets/images/vehicles/classic.png",
    "assets/images/vehicles/divine-24.png",
    "assets/images/vehicles/eternal.png",
    "assets/images/vehicles/loader-without-roof.png",
    "assets/images/vehicles/loader-with-roof.png",
    "assets/images/vehicles/passenger.png"

];

// let index = 0;

// setInterval(() => {

//     index++;

//     if (index >= images.length) {
//         index = 0;
//     }

//     document.getElementById("heroImage").src = images[index];

// }, 3000);

let index = 0;

const heroImage = document.getElementById("heroImage");

function changeVehicle() {

    heroImage.classList.remove("active");

    setTimeout(() => {

        index++;

        if (index >= vehicles.length) {
            index = 0;
        }

        heroImage.src = vehicles[index];

        heroImage.classList.add("active");

    }, 400);

}

setInterval(changeVehicle, 4000);


// hero section ends here

// fade animations

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(".fade-up, .fade-down");

hiddenElements.forEach((el) => observer.observe(el));



// fade animations
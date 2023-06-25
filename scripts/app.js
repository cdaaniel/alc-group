//Select DOM elements
const menuButton = document.querySelector(".menu");
const spans = document.querySelectorAll(".menu span");


//Event listener for the menu button
menuButton.addEventListener("click", () => {
    //get the dom elements
    const navContainer = document.querySelector(".nav-container");
    const navLinks = document.querySelectorAll(".nav-links li");
    const nav = document.querySelector("nav");
    const body = document.querySelector("body");

    //call spanAnimation if is not already active
    !spans[0].style.animation ? spanAnimation() : null;

    //toggle the appropriate classes
    body.classList.toggle("overflow-hidden");
    navContainer.classList.toggle("d-block");
    nav.classList.toggle("active-nav");

    //remove classes when any of the links are clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            body.classList.remove("overflow-hidden");
            nav.classList.remove("active-nav");
            navContainer.classList.remove("d-block");
            spanAnimation("remove");
        })
    })
})

//Animate spans
const spanAnimation = (action) => {
    for (let i = 0; i < 3; i++) {
        const className = `span-${i}-active`;
        if (action === "remove") {
            spans[i].classList.remove(className);
        } else if (action === "add") {
            spans[i].classList.add(className);
        } else {
            spans[i].classList.toggle(className);
        }
    }
}


//Testimonials carousel
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");
const testimonialCards = document.querySelector(".testimonials-card-container");
const indicators = document.querySelectorAll(".indicators span");
let index = 1;

rightArrow.addEventListener("click", (e) => {
    if (index < 3) {
        document.querySelector(".indicators .active").classList.remove('active');
        indicators[index].classList.add("active");
        testimonialCards.style.transform = `translateX(${index * -100}%)`;
        index++;
    }
})

leftArrow.addEventListener("click", (e) => {
    if (index > 1) {
        indicators[index - 1].classList.remove("active");
        index--;
        testimonialCards.style.transform = `translateX(${(index - 1) * -100}%)`;
        indicators[index - 1].classList.add("active");
    }
});






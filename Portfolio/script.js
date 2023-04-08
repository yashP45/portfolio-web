//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
//Service  section - Modal
const serivemodal = document.querySelectorAll(".service-model");
const learnmorebtns = document.querySelectorAll(".learn-more-btn");
const modalclosebtns = document.querySelectorAll(".model-close-btn");

var modal = function (modalClick) {
    serivemodal[modalClick].classList.add("active");
}
learnmorebtns.forEach((learnmorebtns, i) => {
    learnmorebtns.addEventListener("click", () => {
        modal(i);
    })
})

modalclosebtns.forEach((modalclosebtns) => {
    modalclosebtns.addEventListener("click", () => {
        serivemodal.forEach((modalview) => {
            modalview.classList.remove("active");
        })
    })
})
//Portfolio section - Modal
const portfolioModel = document.querySelectorAll(".portfolio-model");
const imgCard = document.querySelectorAll(".img-card");
const portclosebtns = document.querySelectorAll(".portfolio-close-btn");

var portmodal = function (modalClick) {
    portfolioModel[modalClick].classList.add("active");
}
imgCard.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portmodal(i);
    })
})

portclosebtns.forEach((portclosebtns) => {
    portclosebtns.addEventListener("click", () => {
        portfolioModel.forEach((Portfoliomodalview) => {
            Portfoliomodalview.classList.remove("active");
        })
    })
})

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//Website dark/light theme
const themebtn = document.querySelector(".theme-btn");

themebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themebtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentTheme());
})

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themebtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themebtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");


    })
})
//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelector(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
})
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})
navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
})
//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
/*function sendMessage(e){

e.preventDefault();

alert("Your message has been sent successfully!");

document.getElementById("contactForm").reset();

}*/
/* =========================
   TOGGLE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");

const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* =========================
   ALERT BUTTON MESSAGE
========================= */

function showMessage(){

    alert("Welcome to My Portfolio Website!");

}


/* =========================
   SMOOTH SCROLL ACTIVE LINK
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.background = "#222";
scrollBtn.style.color = "white";


window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});


scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/* =========================
   CURRENT YEAR AUTO UPDATE
========================= */

const footerYear = document.getElementById("year");

if(footerYear){

    footerYear.textContent = new Date().getFullYear();

}


/* =========================
   SIMPLE DARK MODE TOGGLE
========================= */

const darkBtn = document.getElementById("dark-mode");

if(darkBtn){

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

    });

}


/* =========================
   SIMPLE FORM VALIDATION
========================= */

const contactForm = document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const message = document.getElementById("message").value;

        if(name === "" || email === "" || message === ""){

            alert("Please fill all fields!");

        } else {

            alert("Message Sent Successfully!");

            contactForm.reset();

        }

    });

}

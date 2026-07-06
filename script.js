
/*====================================================
    1. STICKY NAVBAR
====================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/*====================================================
    2. ACTIVE NAVBAR LINK
====================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbarMenu .nav-link");

function updateActiveLink() {

    let current = "home";

    const scrollPosition = window.scrollY + (window.innerHeight / 3);

    sections.forEach(section => {

        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("resize", updateActiveLink);
window.addEventListener("load", updateActiveLink);

/*====================================================
    3. CLOSE MOBILE MENU
====================================================*/

const navbarMenu = document.getElementById("navbarMenu");

document.querySelectorAll("#navbarMenu .nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const bsCollapse =
                bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            bsCollapse.hide();

        }

    });

});


/*====================================================
                END
====================================================*/

/*====================================================
                years update in footer
====================================================*/
document.getElementById("year").textContent = new Date().getFullYear();

/*====================================================
                AOS INITIALIZE
====================================================*/

AOS.init({

    duration: 900,

    easing: "ease",

    once: true,

    offset: 120,

    mirror: false

});

/*====================================================
                END AOS
====================================================*/
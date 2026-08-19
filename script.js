// ================= NAVBAR =================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================= AOS =================

AOS.init({
    duration: 900,
    once: true,
    offset: 100
});


// ================= GALLERY CAROUSEL =================

$(".gallery-carousel").owlCarousel({

    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {

        0: {
            items: 1
        },

        576: {
            items: 2
        },

        992: {
            items: 3
        }

    }

});


// ================= TESTIMONIAL CAROUSEL =================

$(".testimonial-carousel").owlCarousel({

    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,

    responsive: {

        0: {
            items: 1
        },

        768: {
            items: 2
        },

        1000: {
            items: 3
        }

    }

});


// ================= PORTFOLIO FILTER =================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(.8)";

                setTimeout(() => {
                    item.style.display = "none";
                }, 300);

            }

        });

    });

});


// ================= COUNTER =================

const counters =
    document.querySelectorAll(".counter-number");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const section =
        document.querySelector(".counter-section");

    const sectionTop =
        section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let count = 0;

            const increment =
                target / 80;

            const updateCounter = () => {

                count += increment;

                if (count < target) {

                    counter.innerText =
                        Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText =
                        target + "+";

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);


// ================= CONTACT FORM =================

document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you! Your message has been received."
        );

        this.reset();

    });


// ================= SMOOTH NAVBAR CLOSE =================

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            const navbar =
                document.querySelector(".navbar-collapse");

            if (navbar.classList.contains("show")) {

                new bootstrap.Collapse(navbar).hide();

            }

        });

    });


// ================= PARALLAX =================

window.addEventListener("scroll", function () {

    const hero =
        document.querySelector(".hero");

    const scroll =
        window.pageYOffset;

    if (window.innerWidth > 768) {

        hero.style.backgroundPosition =
            `center ${scroll * 0.35}px`;

    }

});
/* ================= TYPING ANIMATION ================= */

const typed = document.getElementById("typed");

const words = [
    "Python Developer",
    "Cloud Engineer",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function type() {

    const currentWord = words[wordIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typed.textContent =
        currentWord.slice(0, charIndex);


    let speed = deleting
        ? 55
        : 90;


    /* Finished typing */

    if (
        !deleting &&
        charIndex === currentWord.length
    ) {

        speed = 1300;

        deleting = true;
    }


    /* Finished deleting */

    else if (
        deleting &&
        charIndex === 0
    ) {

        deleting = false;

        wordIndex =
            (wordIndex + 1) % words.length;

        speed = 350;
    }


    setTimeout(type, speed);
}


/* Start typing animation */

type();



/* ================= NAVBAR ================= */

const navbar =
    document.getElementById("navbar");

const progress =
    document.getElementById("progress");


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        /* Scroll progress */

        const percentage =
            pageHeight > 0
                ? (scrollTop / pageHeight) * 100
                : 0;


        progress.style.width =
            percentage + "%";


        /* Navbar background */

        if (scrollTop > 20) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );
        }

    }
);



/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuBtn");

const navigation =
    document.getElementById("nav");


menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle(
            "open"
        );

    }
);


/* Close menu after clicking link */

document
    .querySelectorAll("#nav a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "open"
                    );

                }
            );

        }
    );



/* ================= REVEAL ANIMATION ================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );



/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navItems =
    document.querySelectorAll(
        "#nav a"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navItems.forEach(
                            link => {

                                const target =
                                    link.getAttribute(
                                        "href"
                                    );


                                link.classList.toggle(
                                    "active",
                                    target ===
                                    "#" + entry.target.id
                                );

                            }
                        );

                    }

                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);



/* ================= BACK TO TOP ================= */

const topButton =
    document.getElementById("top");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            topButton.classList.add(
                "show"
            );

        } else {

            topButton.classList.remove(
                "show"
            );

        }

    }
);


topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* ================= CURRENT YEAR ================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();
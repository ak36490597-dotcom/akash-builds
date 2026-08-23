// Smooth reveal animation

const revealElements = document.querySelectorAll(
    ".project, .section-header, .about-grid, .skill, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});


// Project card hover effect

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

    project.addEventListener("mouseenter", () => {

        project.style.transition =
            "transform 0.3s ease, border-color 0.3s ease";

    });

});


// Console message

console.log(
    "AKASH BUILDS — Ideas → Code → Reality."
);

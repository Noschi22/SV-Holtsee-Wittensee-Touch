const tabButtons = document.querySelectorAll(".gallery-tabs button");
const galleryGroups = document.querySelectorAll(".coverflow");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let current = 0;
let activeGallery = document.querySelector(".coverflow:not(.hidden)");
let autoSlide;

function getActiveCovers() {
    return activeGallery.querySelectorAll(".cover");
}

function updateGallery() {
    const covers = getActiveCovers();

    covers.forEach((cover, index) => {
        cover.classList.remove("active");

        let offset = index - current;

        cover.style.opacity = "0";
        cover.style.zIndex = "0";

        if (offset === 0) {
            cover.style.transform = "translate(-50%, -50%) scale(1)";
            cover.style.opacity = "1";
            cover.style.zIndex = "10";
            cover.classList.add("active");
        }

        else if (offset === -1) {
            cover.style.transform = "translate(-140%, -50%) rotateY(45deg) scale(.8)";
            cover.style.opacity = ".75";
            cover.style.zIndex = "5";
        }

        else if (offset === 1) {
            cover.style.transform = "translate(40%, -50%) rotateY(-45deg) scale(.8)";
            cover.style.opacity = ".75";
            cover.style.zIndex = "5";
        }

        else if (offset === -2) {
            cover.style.transform = "translate(-220%, -50%) rotateY(60deg) scale(.6)";
            cover.style.opacity = ".4";
            cover.style.zIndex = "1";
        }

        else if (offset === 2) {
            cover.style.transform = "translate(120%, -50%) rotateY(-60deg) scale(.6)";
            cover.style.opacity = ".4";
            cover.style.zIndex = "1";
        }
    });
}

function nextImage() {
    const covers = getActiveCovers();

    current++;

    if (current >= covers.length) {
        current = 0;
    }

    updateGallery();
}

function prevImage() {
    const covers = getActiveCovers();

    current--;

    if (current < 0) {
        current = covers.length - 1;
    }

    updateGallery();
}

function startAutoSlide() {
    clearInterval(autoSlide);

    autoSlide = setInterval(() => {
        nextImage();
    }, 5000);
}

nextButton.addEventListener("click", () => {
    nextImage();
    startAutoSlide();
});

prevButton.addEventListener("click", () => {
    prevImage();
    startAutoSlide();
});

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selected = button.dataset.gallery;

        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        galleryGroups.forEach(group => {
            group.classList.toggle(
                "hidden",
                group.dataset.galleryGroup !== selected
            );
        });

        activeGallery = document.querySelector(".coverflow:not(.hidden)");
        current = 0;

        updateGallery();
        startAutoSlide();
    });
});

updateGallery();
startAutoSlide();





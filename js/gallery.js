/* =========================================================
   GALERIE KONFIGURATION
========================================================= */

const galerien = [

    {
        name: "Eindrücke",
        ordner: "eindrücke",

        bilder: [
            "bild1.jpeg",
            "bild2.jpeg",
            "bild3.jpeg"
        ]
    },

    {
        name: "Siegerfotos",
        ordner: "siegerfotos",

        bilder: [
            "bild1.jpeg",
            "bild2.jpeg",
            "bild3.png",
            "schwansen.png"
        ]
    }

];


/* =========================================================
   HTML ELEMENTE
========================================================= */

const tabsContainer =
    document.getElementById("gallery-tabs");

const coverflow =
    document.getElementById("coverflow");

const nextButton =
    document.querySelector(".next");

const prevButton =
    document.querySelector(".prev");


/* =========================================================
   VARIABLEN
========================================================= */

let aktiveGalerie = 0;
let current = 0;
let autoSlide;


/* =========================================================
   ORDNER BUTTONS ERSTELLEN
========================================================= */

function createGalleryButtons() {

    tabsContainer.innerHTML = "";

    galerien.forEach((galerie, index) => {

        const button =
            document.createElement("button");

        button.textContent =
            galerie.name;

        if (index === aktiveGalerie) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            aktiveGalerie = index;
            current = 0;

            createGalleryButtons();
            loadGallery();
            startAutoSlide();

        });

        tabsContainer.appendChild(button);

    });

}


/* =========================================================
   GALERIE LADEN
========================================================= */

function loadGallery() {

    coverflow.innerHTML = "";

    const galerie =
        galerien[aktiveGalerie];

    galerie.bilder.forEach((dateiname, index) => {

        const cover =
            document.createElement("div");

        cover.className =
            "cover";


        const img =
            document.createElement("img");


        img.src =
            `Dateien/bilder/Galerie/${galerie.ordner}/${dateiname}`;


        img.alt =
            `${galerie.name} - Bild ${index + 1}`;


        img.onerror = function () {

            console.error(
                "Bild nicht gefunden:",
                img.src
            );

            cover.style.display = "none";

        };


        cover.appendChild(img);


        /* =============================================
           BESCHRIFTUNG NUR BEI SIEGERFOTOS
        ============================================= */

        if (galerie.ordner === "siegerfotos") {

            const caption =
                document.createElement("div");

            caption.className =
                "image-caption";


            let name =
                dateiname.replace(/\.[^/.]+$/, "");

            name =
                name.replace(/[-_]/g, " ");

            name =
                name.charAt(0).toUpperCase() +
                name.slice(1);

            caption.textContent =
                name;

            cover.appendChild(caption);

        }


        coverflow.appendChild(cover);

    });


    updateGallery();

}


/* =========================================================
   SICHTBARE BILDER
========================================================= */

function getCovers() {

    return coverflow.querySelectorAll(
        ".cover:not([style*='display: none'])"
    );

}


/* =========================================================
   COVERFLOW ANORDNEN
========================================================= */

function updateGallery() {

    const covers =
        getCovers();


    if (covers.length === 0) {
        return;
    }


    if (current >= covers.length) {
        current = 0;
    }


    covers.forEach((cover, index) => {

        cover.classList.remove("active");

        const offset =
            index - current;


        cover.style.opacity = "0";
        cover.style.zIndex = "0";


        if (offset === 0) {

            cover.style.transform =
                "translate(-50%, -50%) scale(1)";

            cover.style.opacity = "1";
            cover.style.zIndex = "10";

            cover.classList.add("active");

        }

        else if (offset === -1) {

            cover.style.transform =
                "translate(-140%, -50%) rotateY(45deg) scale(.8)";

            cover.style.opacity = ".75";
            cover.style.zIndex = "5";

        }

        else if (offset === 1) {

            cover.style.transform =
                "translate(40%, -50%) rotateY(-45deg) scale(.8)";

            cover.style.opacity = ".75";
            cover.style.zIndex = "5";

        }

        else if (offset === -2) {

            cover.style.transform =
                "translate(-220%, -50%) rotateY(60deg) scale(.6)";

            cover.style.opacity = ".4";
            cover.style.zIndex = "1";

        }

        else if (offset === 2) {

            cover.style.transform =
                "translate(120%, -50%) rotateY(-60deg) scale(.6)";

            cover.style.opacity = ".4";
            cover.style.zIndex = "1";

        }

    });

}


/* =========================================================
   NÄCHSTES BILD
========================================================= */

function nextImage() {

    const covers =
        getCovers();

    if (covers.length === 0) {
        return;
    }

    current++;

    if (current >= covers.length) {
        current = 0;
    }

    updateGallery();

}


/* =========================================================
   VORHERIGES BILD
========================================================= */

function prevImage() {

    const covers =
        getCovers();

    if (covers.length === 0) {
        return;
    }

    current--;

    if (current < 0) {
        current = covers.length - 1;
    }

    updateGallery();

}


/* =========================================================
   AUTOMATISCHER BILDWECHSEL
========================================================= */

function startAutoSlide() {

    clearInterval(autoSlide);

    autoSlide =
        setInterval(() => {

            nextImage();

        }, 5000);

}


/* =========================================================
   PFEILE
========================================================= */

nextButton.addEventListener("click", () => {

    nextImage();
    startAutoSlide();

});


prevButton.addEventListener("click", () => {

    prevImage();
    startAutoSlide();

});


/* =========================================================
   START
========================================================= */

createGalleryButtons();
loadGallery();
startAutoSlide();
/* =========================================================
   GRUNDEINSTELLUNGEN
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    overflow: hidden;
    min-height: 100vh;

    font-family: Arial, Helvetica, sans-serif;

    background:
        url("../Dateien/bilder/stadion.jpeg")
        center center / cover no-repeat;

    position: relative;
}


/* =========================================================
   HINTERGRUND OVERLAY
========================================================= */

.overlay {
    position: fixed;
    inset: 0;

    background:
        radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.05),
            rgba(0, 0, 0, 0.60)
        );

    z-index: 0;

    pointer-events: none;
}


/* =========================================================
   INHALTE ÜBER DEM HINTERGRUND
========================================================= */

header,
.gallery-tabs,
.coverflow-container {
    position: relative;
    z-index: 1;
}


/* Uhr und Zurück-Button behalten ihre Position
   aus der main.css */

.datetime-card,
.nav-back-fixed {
    z-index: 200;
}


/* =========================================================
   ÜBERSCHRIFT
========================================================= */

header {
    text-align: center;
    color: white;

    padding: 25px 20px 10px;
}


header h1 {
    font-size: 3rem;

    text-shadow:
        0 0 10px white,
        0 0 20px rgba(255, 255, 255, 0.6);
}


header p {
    margin-top: 10px;

    font-size: 1.1rem;

    color: rgba(255, 255, 255, 0.9);
}


/* =========================================================
   ORDNER BUTTONS
========================================================= */

.gallery-tabs {
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 18px;

    margin: 15px auto 20px;

    padding: 0 120px;

    flex-wrap: wrap;

    z-index: 100;
}


.gallery-tabs button {
    position: relative;

    z-index: 101;

    min-width: 150px;

    padding: 14px 26px;

    border: 2px solid #00ff55;

    border-radius: 999px;

    background:
        rgba(0, 0, 0, 0.55);

    color: white;

    font-size: 1.1rem;

    font-weight: 600;

    cursor: pointer;

    pointer-events: auto;

    transition:
        background 0.25s ease,
        transform 0.25s ease,
        box-shadow 0.25s ease;
}


.gallery-tabs button:hover {
    background:
        rgba(0, 255, 85, 0.25);

    transform: scale(1.05);
}


.gallery-tabs button.active {
    background: #00ff55;

    color: #001b08;

    font-weight: bold;

    box-shadow:
        0 0 10px rgba(0, 255, 85, 0.8),
        0 0 25px rgba(0, 255, 85, 0.5);
}


/* =========================================================
   COVERFLOW BEREICH
========================================================= */

.coverflow-container {
    width: 100%;

    height: 60vh;

    display: flex;

    justify-content: center;
    align-items: center;

    z-index: 1;
}


/* =========================================================
   COVERFLOW
========================================================= */

.coverflow {
    position: relative;

    width: 1200px;
    height: 550px;

    perspective: 1500px;
}


/* =========================================================
   EINZELNES BILD
========================================================= */

.cover {
    position: absolute;

    top: 50%;
    left: 50%;

    width: 520px;
    height: 320px;

    transform-style: preserve-3d;

    transition:
        transform 0.7s ease,
        opacity 0.7s ease;
}


/* =========================================================
   BILD
========================================================= */

.cover img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;

    border: 4px solid #00ff55;

    border-radius: 14px;

    box-shadow:
        0 0 10px rgba(0, 255, 85, 0.5),
        0 0 25px rgba(0, 255, 85, 0.4),
        0 0 60px rgba(0, 255, 85, 0.2),
        0 20px 50px rgba(0, 0, 0, 0.8);

    transition:
        border 0.4s ease,
        box-shadow 0.4s ease;
}


/* AKTIVES BILD */

.cover.active img {
    border: 4px solid white;

    box-shadow:
        0 0 15px white,
        0 0 35px rgba(255, 255, 255, 0.8),
        0 0 80px rgba(255, 255, 255, 0.4),
        0 25px 60px rgba(0, 0, 0, 0.9);
}


/* =========================================================
   PFEILTASTEN
========================================================= */

.nav {
    position: absolute;

    width: 70px;
    height: 70px;

    border: 2px solid rgba(255, 255, 255, 0.3);

    border-radius: 50%;

    cursor: pointer;

    font-size: 35px;

    color: white;

    background:
        rgba(0, 0, 0, 0.45);

    backdrop-filter: blur(8px);

    transition:
        background 0.3s ease,
        transform 0.3s ease;

    z-index: 30;
}


.nav:hover {
    background:
        rgba(255, 255, 255, 0.30);

    transform: scale(1.1);
}


/* LINKER PFEIL */

.prev {
    left: 40px;
}


/* RECHTER PFEIL */

.next {
    right: 40px;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1200px) {

    .coverflow {
        width: 950px;
    }


    .cover {
        width: 460px;
        height: 290px;
    }

}


@media (max-width: 900px) {

    header h1 {
        font-size: 2.3rem;
    }


    .gallery-tabs {
        padding: 0 80px;

        gap: 10px;
    }


    .gallery-tabs button {
        min-width: 120px;

        padding: 11px 18px;

        font-size: 1rem;
    }


    .coverflow {
        width: 750px;
    }


    .cover {
        width: 390px;
        height: 250px;
    }


    .nav {
        width: 60px;
        height: 60px;

        font-size: 30px;
    }


    .prev {
        left: 20px;
    }


    .next {
        right: 20px;
    }

}


/* =========================================================
   BESCHRIFTUNG SIEGERFOTOS
========================================================= */

.image-caption {
    position: absolute;

    left: 50%;
    bottom: -55px;

    transform: translateX(-50%);

    width: 100%;

    text-align: center;

    color: white;

    font-size: 1.35rem;

    font-weight: bold;

    text-shadow:
        0 2px 5px rgba(0, 0, 0, 0.9),
        0 0 10px rgba(0, 0, 0, 0.8);

    pointer-events: none;
}
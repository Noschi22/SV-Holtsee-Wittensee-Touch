/* =========================================================
   VIDEO ELEMENTE
========================================================= */

const videoButtons =
    document.querySelectorAll(".video-tab");

const videoPlayer =
    document.getElementById("video-player");


/* =========================================================
   VIDEO LADEN
========================================================= */

function loadVideo(videoPath) {

    /* Falls gerade ein Video läuft: stoppen */
    videoPlayer.pause();

    /* Sicher an den Anfang setzen */
    videoPlayer.currentTime = 0;

    /* Neues Video setzen */
    videoPlayer.src = videoPath;

    /* Video nur laden, NICHT automatisch starten */
    videoPlayer.load();

}


/* =========================================================
   VIDEO BUTTONS
========================================================= */

videoButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedVideo =
            button.dataset.video;


        /* Aktiven Button entfernen */

        videoButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Angeclickten Button aktiv setzen */

        button.classList.add("active");


        /* Ausgewähltes Video laden */

        loadVideo(selectedVideo);

    });

});


/* =========================================================
   FEHLERMELDUNG
========================================================= */

videoPlayer.addEventListener("error", () => {

    console.error(
        "Fehler beim Laden des Videos:",
        videoPlayer.currentSrc,
        videoPlayer.error
    );

});


/* =========================================================
   VIDEO ENDE
========================================================= */

videoPlayer.addEventListener("ended", () => {

    /* Nach Videoende wieder an den Anfang */
    videoPlayer.currentTime = 0;

});


/* =========================================================
   STARTVIDEO
========================================================= */

/*
   Absichtlich KEIN automatischer Start.

   Das erste Video wird erst geladen,
   wenn der Benutzer auf einen Video-Button klickt.

   Das ist für Raspberry / Chromium stabiler.
*/
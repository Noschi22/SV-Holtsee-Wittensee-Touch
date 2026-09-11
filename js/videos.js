/* =========================================================
   VIDEO ELEMENTE
========================================================= */

const videoButtons =
    document.querySelectorAll(".video-tab");


const videoPlayer =
    document.getElementById("video-player");


const videoSource =
    document.getElementById("video-source");


/* =========================================================
   VIDEO BUTTONS
========================================================= */

videoButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedVideo =
            button.dataset.video;


        /* Aktiven Button ändern */

        videoButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        /* Video stoppen */

        videoPlayer.pause();


        /* Neues Video setzen */

        videoSource.src =
            selectedVideo;


        /* Video neu laden */

        videoPlayer.load();


        /* Video starten */

        videoPlayer.play().catch(error => {

            console.log(
                "Video konnte nicht automatisch gestartet werden:",
                error
            );

        });

    });

});


/* =========================================================
   FEHLERMELDUNG
========================================================= */

videoPlayer.addEventListener("error", () => {

    console.error(
        "Fehler beim Laden des Videos:",
        videoSource.src
    );

});


videoSource.addEventListener("error", () => {

    console.error(
        "Videodatei nicht gefunden oder nicht abspielbar:",
        videoSource.src
    );

});
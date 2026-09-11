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

    videoPlayer.pause();

    videoPlayer.src = videoPath;

    videoPlayer.load();

    videoPlayer.play().catch(error => {

        console.log(
            "Video konnte nicht automatisch gestartet werden:",
            error
        );

    });

}


/* =========================================================
   VIDEO BUTTONS
========================================================= */

videoButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedVideo =
            button.dataset.video;


        videoButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


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
   STARTVIDEO
========================================================= */

loadVideo(
    "Dateien/Videos/video1.mp4"
);
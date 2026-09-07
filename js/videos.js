const videoButtons = document.querySelectorAll(".video-tab");
const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");

videoButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedVideo = button.dataset.video;

        // Aktiven Button markieren
        videoButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Ausgewähltes Video laden
        videoPlayer.pause();
        videoSource.src = selectedVideo;
        videoPlayer.load();

        // Video nach dem Klick starten
        videoPlayer.play().catch(() => {
            // Falls automatisches Starten blockiert wird,
            // kann der Play-Button benutzt werden.
        });
    });
});
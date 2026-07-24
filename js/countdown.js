document.addEventListener("DOMContentLoaded", () => {

    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    // 🔧 SPIELDATUM HIER EINSTELLEN
    const matchDate = new Date("2026-03-08T15:00:00");

    function updateCountdown() {
        const now = new Date();
        const diff = matchDate - now;

        if (diff <= 0) {
            countdownEl.textContent = "JETZT!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.textContent =
            `${days} Tage ${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(seconds).padStart(2, "0")}`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});

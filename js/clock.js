function updateClock() {
    const now = new Date();

    const dateEl = document.getElementById("date");
    const clockMainEl = document.getElementById("clock-main");
    const clockSecEl = document.getElementById("clock-sec");

    if (!dateEl || !clockMainEl || !clockSecEl) {
        return;
    }

    const weekday = now.toLocaleDateString("de-DE", { weekday: "long" });
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const weekdayFormatted =
        weekday.charAt(0).toUpperCase() + weekday.slice(1);

    dateEl.textContent = `${weekdayFormatted}, ${day}.${month}.${year}`;
    clockMainEl.textContent = `${hours}:${minutes}`;
    clockSecEl.textContent = seconds;
}

updateClock();
setInterval(updateClock, 1000);
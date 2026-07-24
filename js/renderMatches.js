function getCountdownText(matchDateString) {
    const now = new Date();
    const matchDate = new Date(matchDateString);
    const diff = matchDate - now;

    if (diff <= 0) {
        return "Spiel läuft oder hat begonnen";
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return `Anpfiff in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function formatMatchDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleDateString("de-DE", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }) + " · " + date.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
    }) + " Uhr";
}

function renderMatch(containerId, match) {
    const container = document.getElementById(containerId);

    if (!container || !match) {
        return;
    }

    if (!match.date || !match.home || !match.away) {
        container.innerHTML = `<div class="match-empty">Keine Spieldaten vorhanden</div>`;
        return;
    }

    container.innerHTML = `
        <div class="match-card">
            <div class="match-date-row">
                <span class="match-date-icon">🗓️</span>
                <span>${formatMatchDate(match.date)}</span>
            </div>

            <div class="match-teams-row">
                <div class="match-logo-wrap">
                    <img class="match-logo" src="${match.home.logo}" alt="${match.home.name}">
                </div>

                <div class="team-name ${match.home.highlight ? "highlight" : ""}">
                    ${match.home.name}
                </div>

                <div class="vs-badge">VS</div>

                <div class="team-name ${match.away.highlight ? "highlight" : ""}">
                    ${match.away.name}
                </div>

                <div class="match-logo-wrap">
                    <img class="match-logo" src="${match.away.logo}" alt="${match.away.name}">
                </div>
            </div>

            <div class="match-countdown">
                <strong>${getCountdownText(match.date)}</strong>
            </div>
        </div>
    `;
}
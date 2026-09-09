function getCountdownText(matchDateString) {

    const now = new Date();

    const matchDate = new Date(matchDateString);

    const diff = matchDate - now;


    if (diff <= 0) {

        return "Spiel läuft oder hat begonnen";

    }


    const totalSeconds =
        Math.floor(diff / 1000);


    const days =
        Math.floor(
            totalSeconds /
            (60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                totalSeconds %
                (60 * 60 * 24)
            ) /
            (60 * 60)
        );


    const minutes =
        Math.floor(
            (
                totalSeconds %
                (60 * 60)
            ) /
            60
        );


    const seconds =
        totalSeconds % 60;


    return `Anpfiff in ${days}d ${hours}h ${minutes}m ${seconds}s`;

}



/* =========================================================
   DATUM FORMATIEREN
========================================================= */

function formatMatchDate(dateString) {

    const date =
        new Date(dateString);


    return date.toLocaleDateString(
        "de-DE",
        {

            weekday: "long",

            day: "2-digit",

            month: "2-digit",

            year: "numeric"

        }

    ) +

    " · " +

    date.toLocaleTimeString(
        "de-DE",
        {

            hour: "2-digit",

            minute: "2-digit"

        }

    ) +

    " Uhr";

}



/* =========================================================
   ERGEBNIS ODER COUNTDOWN
========================================================= */

function getMatchStatus(match) {

    /*
    Wenn ein Ergebnis eingetragen wurde,
    wird dieses angezeigt.
    */

    if (

        match.result &&

        Number.isFinite(match.result.home) &&

        Number.isFinite(match.result.away)

    ) {

        return `

            <div class="match-result">

                <span class="result-score">
                    ${match.result.home}
                    :
                    ${match.result.away}
                </span>

            </div>

        `;

    }


    /*
    Noch kein Ergebnis:
    Countdown anzeigen.
    */

    return `

        <div class="match-countdown">

            <strong>

                ${getCountdownText(match.date)}

            </strong>

        </div>

    `;

}



/* =========================================================
   SPIEL RENDERN
========================================================= */

function renderMatch(containerId, match) {

    const container =
        document.getElementById(containerId);


    if (!container || !match) {

        return;

    }


    if (

        !match.date ||

        !match.home ||

        !match.away

    ) {

        container.innerHTML = `

            <div class="match-empty">

                Keine Spieldaten vorhanden

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="match-card">


            <!-- DATUM -->

            <div class="match-date-row">

                <span class="match-date-icon">

                    🗓️

                </span>


                <span>

                    ${formatMatchDate(match.date)}

                </span>

            </div>



            <!-- MANNSCHAFTEN -->

            <div class="match-teams-row">


                <!-- HEIM LOGO -->

                <div class="match-logo-wrap">

                    <img
                        class="match-logo"
                        src="${match.home.logo}"
                        alt="${match.home.name}"
                    >

                </div>



                <!-- HEIM -->

                <div
                    class="
                        team-name
                        ${match.home.highlight ? "highlight" : ""}
                    "
                >

                    ${match.home.name}

                </div>



                <!-- VS -->

                <div class="vs-badge">

                    VS

                </div>



                <!-- AUSWÄRTS -->

                <div
                    class="
                        team-name
                        ${match.away.highlight ? "highlight" : ""}
                    "
                >

                    ${match.away.name}

                </div>



                <!-- AUSWÄRTS LOGO -->

                <div class="match-logo-wrap">

                    <img
                        class="match-logo"
                        src="${match.away.logo}"
                        alt="${match.away.name}"
                    >

                </div>

            </div>



            <!-- ERGEBNIS ODER COUNTDOWN -->

            ${getMatchStatus(match)}


        </div>

    `;

}
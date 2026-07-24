function renderSpielbericht(data) {
    const titelEl = document.getElementById("bericht_titel");
    const datumEl = document.getElementById("bericht_datum");
    const teamEl = document.getElementById("bericht_team");
    const ergebnisEl = document.getElementById("bericht_ergebnis");

    const team1NameEl = document.getElementById("bericht_team1_name");
    const team2NameEl = document.getElementById("bericht_team2_name");
    const team1LogoEl = document.getElementById("bericht_team1_logo");
    const team2LogoEl = document.getElementById("bericht_team2_logo");

    const bildEl = document.getElementById("bericht_bild");
    const trainerEl = document.getElementById("bericht_trainer");
    const textEl = document.getElementById("bericht_text");
    const torschuetzenEl = document.getElementById("bericht_torschuetzen");
    const besonderheitenEl = document.getElementById("bericht_besonderheiten");
    const pitchEl = document.getElementById("bericht_pitch");
    const bankEl = document.getElementById("bericht_bank");

    const svName = "SV Holtsee/Wittensee";
    const svLogo = "../../assets/logo.png";

    titelEl.textContent = data.titel || "Spielbericht";
    datumEl.textContent = data.datum || "--";
    teamEl.textContent = data.team || "--";
    ergebnisEl.textContent = data.ergebnis || "--";

    const istHeim = data.istHeim === true;

    let team1Name = "";
    let team1Logo = "";
    let team2Name = "";
    let team2Logo = "";

    if (istHeim) {
        team1Name = svName;
        team1Logo = svLogo;
        team2Name = data.gegner || "Gegner";
        team2Logo = data.gegnerLogo || "../img/gegner.png";
    } else {
        team1Name = data.gegner || "Gegner";
        team1Logo = data.gegnerLogo || "../img/gegner.png";
        team2Name = svName;
        team2Logo = svLogo;
    }

    team1NameEl.textContent = team1Name;
    team2NameEl.textContent = team2Name;
    team1LogoEl.src = team1Logo;
    team2LogoEl.src = team2Logo;
    team1LogoEl.alt = team1Name;
    team2LogoEl.alt = team2Name;

    team1NameEl.classList.remove("highlight");
    team2NameEl.classList.remove("highlight");

    if (istHeim) {
        team1NameEl.classList.add("highlight");
    } else {
        team2NameEl.classList.add("highlight");
    }

    bildEl.src = data.bild || "../img/spielbericht-default.jpg";
    bildEl.alt = data.bildAlt || "Spielbild";

    trainerEl.textContent = data.trainer || "--";

    textEl.innerHTML = (data.text || "--")
        .trim()
        .replace(/\n\s*\n/g, "<br><br>")
        .replace(/\n/g, "<br>");

    torschuetzenEl.innerHTML = "";
    (data.torschuetzen || []).forEach((eintrag) => {
        const item = document.createElement("div");
        item.className = "scorer-item";
        item.textContent = eintrag;
        torschuetzenEl.appendChild(item);
    });

    besonderheitenEl.innerHTML = "";
    (data.besonderheiten || []).forEach((eintrag) => {
        const item = document.createElement("div");
        item.className = "special-item";
        item.textContent = eintrag;
        besonderheitenEl.appendChild(item);
    });

    pitchEl.innerHTML = "";
    (data.startelf || []).forEach((spieler) => {
        const player = document.createElement("div");
        player.className = "pitch-player";
        player.style.left = `${spieler.x}%`;
        player.style.top = `${spieler.y}%`;

        player.innerHTML = `
            <div class="pitch-player-number">${spieler.nummer}</div>
            <div class="pitch-player-name">${spieler.name}</div>
        `;

        pitchEl.appendChild(player);
    });

    bankEl.innerHTML = "";
    (data.bank || []).forEach((eintrag) => {
        const li = document.createElement("li");
        li.textContent = eintrag;
        bankEl.appendChild(li);
    });
}
async function loadPlayer(playerId) {
    const dataPath = window.location.hostname.includes("github.io")
        ? "/SV-Holtsee-Wittensee-Touch/data/spieler.json"
        : "/data/spieler.json";

    try {
        const response = await fetch(dataPath, { cache: "no-store" });

        if (!response.ok) {
            console.error(`JSON nicht gefunden: ${response.status} ${response.statusText}`);
            return;
        }

        const players = await response.json();

        const player = players.find(
            p => String(p.id).toLowerCase() === String(playerId).toLowerCase()
        );

        if (!player) {
            console.error(`Spieler mit id "${playerId}" nicht gefunden.`);
            return;
        }

        setText("player_name", player.name);
        setText("player_seit", formatDate(player.seit));
        setText("player_nummer", player.nummer);
        setText("player_position", player.position);

        setText("min_liga", player.min_liga);
        setText("tore_liga", player.tore_liga);
        setText("vorlagen_liga", player.vorlagen_liga);
        setText("gelb_liga", player.gelb_liga);
        setText("gelbrot_liga", player.gelbrot_liga);
        setText("rot_liga", player.rot_liga);

        setText("min_zwoote", player.min_zwoote);
        setText("tore_zwoote", player.tore_zwoote);
        setText("vorlagen_zwoote", player.vorlagen_zwoote);
        setText("gelb_zwoote", player.gelb_zwoote);
        setText("gelbrot_zwoote", player.gelbrot_zwoote);
        setText("rot_zwoote", player.rot_zwoote);

        setText("min_total", toNumber(player.min_liga) + toNumber(player.min_zwoote));
        setText("tore_total", toNumber(player.tore_liga) + toNumber(player.tore_zwoote));
        setText("vorlagen_total", toNumber(player.vorlagen_liga) + toNumber(player.vorlagen_zwoote));
        setText("gelb_total", toNumber(player.gelb_liga) + toNumber(player.gelb_zwoote));
        setText("gelbrot_total", toNumber(player.gelbrot_liga) + toNumber(player.gelbrot_zwoote));
        setText("rot_total", toNumber(player.rot_liga) + toNumber(player.rot_zwoote));
    } catch (error) {
        console.error("Fehler beim Laden der Spielerdaten:", error);
    }
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = value ?? "0";
    }
}

function toNumber(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
}

function formatDate(dateStr) {
    if (!dateStr) return "";

    const d = new Date(dateStr);

    if (isNaN(d)) {
        const parts = dateStr.split(/[.\-]/);
        if (parts.length >= 3) {
            return `${parts[0].padStart(2, "0")}.${parts[1].padStart(2, "0")}.${parts[2].slice(-2)}`;
        }
        return dateStr;
    }

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = String(d.getFullYear());

    return `${day}.${month}.${year}`;
}
const spielberichtData = {
    titel: "Spielbericht",
    datum: "Samstag, 12.05.2026",
    team: "Liga",
    ergebnis: "0:0",

    istHeim: false,

    gegner: "Osterbyer SV",
    gegnerLogo: "../../assets/osterby.png",

    bild: "../img/ball.jpg",
    bildAlt: "Spielszene",

    trainer: "Trainer: `Benny` Hord",

    torschuetzen: [
        "Fehlanzeige",
    ],

    startelf: [
        { nummer: "27",  name: "Erick", x: 50, y: 90 },

        { nummer: "2",  name: "Arne", x: 18, y: 72 },
        { nummer: "8",  name: "Rouven",  x: 38, y: 74 },
        { nummer: "7",  name: "Max L.",  x: 62, y: 74 },
        { nummer: "3",  name: "Tim", x: 82, y: 72 },

        { nummer: "13",  name: "Christoph", x: 38, y: 55 },
        { nummer: "11",  name: "Kian",  x: 62, y: 55 },

        { nummer: "9",  name: "Matti", x: 20, y: 34 },
        { nummer: "29", name: "Till", x: 50, y: 34 },
        { nummer: "18", name: "Jan-Emil", x: 80, y: 34 },

        { nummer: "22",  name: "Kevin",  x: 50, y: 12 }
    ],

    bank: [
        "5 - Don",
        "14 - Bjarne",
        "17 - OS",
        "21 - Marek",
    ],

    besonderheiten: [
        "---------",
    ],

    text: `
        Die Liga     `
};

renderSpielbericht(spielberichtData);
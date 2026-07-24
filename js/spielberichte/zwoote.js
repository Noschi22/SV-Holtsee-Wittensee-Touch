const spielberichtData = {
    titel: "Spielbericht",
    datum: "Sonntag, 10.05.2026",
    team: "Zwoote",
    ergebnis: "2:7",

    istHeim: false,

    gegner: "SG Schinkel/Osdorf",
    gegnerLogo: "../../assets/schinkel.png",

    bild: "../img/ball.jpg",
    bildAlt: "Spielszene",

    trainer: "Trainer: Norbert Schink",

    torschuetzen: [
        "8' Flo",
        "15' Maxi",
        "58' Uppi",
        "66' Maxi",
        "79' Bosse",
        "86' Eigentor",
        "89' Bosse",
    ],

    startelf: [
        { nummer: "1",  name: "Brice", x: 50, y: 90 },

        { nummer: "12",  name: "Odin", x: 18, y: 72 },
        { nummer: "4",  name: "Nicolas",  x: 38, y: 74 },
        { nummer: "18",  name: "Basti L.",  x: 62, y: 74 },
        { nummer: "3",  name: "Steffen", x: 82, y: 72 },

        { nummer: "7",  name: "Veit", x: 38, y: 55 },
        { nummer: "8",  name: "Kalle",  x: 62, y: 55 },

        { nummer: "6",  name: "Maxi", x: 20, y: 34 },
        { nummer: "11", name: "Justin", x: 50, y: 28 },
        { nummer: "2", name: "Flo", x: 80, y: 34 },

        { nummer: "23",  name: "Bosse",  x: 50, y: 12 }
    ],

    bank: [
        "13 - Jason",
        "14 - Uppi",
        "15 - Erik",
        "16 - Philipp",
    ],

    besonderheiten: [
        "Guter Anfang",
        "nur die 3 Punkte zählen....."
    ],

    text: `
       ---
    `
};

renderSpielbericht(spielberichtData);
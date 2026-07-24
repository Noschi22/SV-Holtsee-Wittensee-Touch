function enterFullscreen() {
    const docEl = document.documentElement;

    if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
    } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function isFullscreenActive() {
    return !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
    );
}

function toggleFullscreen() {
    if (isFullscreenActive()) {
        exitFullscreen();
    } else {
        enterFullscreen();
    }
}

/* Klick irgendwo auf der Seite startet Fullscreen */
document.addEventListener("click", () => {
    if (!isFullscreenActive()) {
        enterFullscreen();
    }
}, { once: true });

/* Taste F zum Umschalten */
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "f") {
        toggleFullscreen();
    }

});

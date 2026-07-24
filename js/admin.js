
        const ADMIN_PIN = "1908";

        const hotspot = document.getElementById("admin-hotspot");
        const overlay = document.getElementById("admin-overlay");
        const loginBtn = document.getElementById("admin-login");
        const errorBox = document.getElementById("admin-error");
        const actions = document.getElementById("admin-actions");
        const closeBtn = document.getElementById("admin-close");
        const reloadBtn = document.getElementById("admin-reload");
        const homeBtn = document.getElementById("admin-home");
        const exitBtn = document.getElementById("admin-exit");

        const pinDisplay = document.getElementById("pin-display");
        const pinClear = document.getElementById("pin-clear");
        const pinDelete = document.getElementById("pin-delete");
        const pinKeys = document.querySelectorAll(".pin-key[data-key]");

        let enteredPin = "";
        let pressTimer = null;
        let opened = false;

        function updatePinDisplay() {
            pinDisplay.textContent = enteredPin.length ? "•".repeat(enteredPin.length) : "••••";
        }

        function resetPin() {
            enteredPin = "";
            updatePinDisplay();
        }

        function openAdmin() {
            if (opened) return;
            opened = true;
            overlay.style.display = "flex";
            errorBox.textContent = "";
            actions.style.display = "none";
            resetPin();
        }

        function closeAdmin() {
            opened = false;
            overlay.style.display = "none";
            errorBox.textContent = "";
            actions.style.display = "none";
            resetPin();
        }

        function startPress(e) {
            e.preventDefault();
            clearTimeout(pressTimer);
            pressTimer = setTimeout(openAdmin, 3000);
        }

        function cancelPress() {
            clearTimeout(pressTimer);
        }

        hotspot.addEventListener("touchstart", startPress, { passive: false });
        hotspot.addEventListener("touchend", cancelPress);
        hotspot.addEventListener("touchcancel", cancelPress);

        hotspot.addEventListener("mousedown", startPress);
        hotspot.addEventListener("mouseup", cancelPress);
        hotspot.addEventListener("mouseleave", cancelPress);

        pinKeys.forEach((key) => {
            key.addEventListener("click", () => {
                if (enteredPin.length < 6) {
                    enteredPin += key.dataset.key;
                    updatePinDisplay();
                    errorBox.textContent = "";
                }
            });
        });

        pinClear.addEventListener("click", () => {
            resetPin();
            errorBox.textContent = "";
        });

        pinDelete.addEventListener("click", () => {
            enteredPin = enteredPin.slice(0, -1);
            updatePinDisplay();
            errorBox.textContent = "";
        });

        loginBtn.addEventListener("click", () => {
            if (enteredPin === ADMIN_PIN) {
                errorBox.textContent = "";
                actions.style.display = "block";
            } else {
                errorBox.textContent = "Falscher PIN";
                resetPin();
            }
        });

        closeBtn.addEventListener("click", closeAdmin);
        reloadBtn.addEventListener("click", () => location.reload());
        homeBtn.addEventListener("click", () => window.location.href = "index.html");

        // 🔥 NEUER EXIT (funktioniert mit pkill chromium)
        exitBtn.addEventListener("click", async () => {
            try {
                await fetch("http://localhost:5000/exit");
            } catch (err) {
                errorBox.textContent = "Kiosk konnte nicht beendet werden";
            }
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeAdmin();
        });

        document.addEventListener("contextmenu", (e) => e.preventDefault());
        document.addEventListener("dragstart", (e) => e.preventDefault());

        updatePinDisplay();
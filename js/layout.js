.page-shell {
    min-height: 100vh;
    padding: 24px 32px 50px;
}

.welcome {
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 34px;
}

.animated-logo {
    width: 138px;
    filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.35));
    animation:
        float 4s ease-in-out infinite,
        pulse 3s ease-in-out infinite;
}

.datetime-card {
    position: fixed;
    top: 12px;
    right: 20px;
    z-index: 1000;

    min-width: 230px;
    padding: 16px 22px 14px;

    background: rgba(3, 10, 28, 0.92);
    border: 2px solid rgba(247, 184, 0, 0.35);
    border-radius: 22px;

    text-align: center;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(8px);
}

.date-text {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
    color: #e5e7eb;
}

.clock {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 6px;

    color: rgb(247, 184, 0);
    font-weight: 900;
    line-height: 1;
}

#clock-main {
    font-size: 54px;
    letter-spacing: 1px;
}

#clock-sec {
    font-size: 0.68em;
    opacity: 0.95;
    font-weight: 800;
}

#clock-sec::before {
    content: ":";
    margin-right: 3px;
}
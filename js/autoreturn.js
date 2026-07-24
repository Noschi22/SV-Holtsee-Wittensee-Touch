
let timeout;

function resetTimer() {
    clearTimeout(timeout);

    timeout = setTimeout(function() {
        window.location.href = "index.html";
    }, 180000);
}

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;
document.onclick = resetTimer;
document.onscroll = resetTimer;

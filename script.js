/* script.js */

// 1. Typewriter Effect
document.querySelectorAll('.typewriter').forEach(el => {
    const text = el.getAttribute('data-text');
    el.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    setTimeout(type, 400);
});

// 2. Runaway "No" Button
const noBtn = document.getElementById('noBtn');
if (noBtn) {
    const moveButton = (e) => {
        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${Math.max(10, x)}px`;
        noBtn.style.top = `${Math.max(10, y)}px`;
        noBtn.style.zIndex = '999';
    };
    noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });
    noBtn.addEventListener('mouseover', moveButton);
}

// 3. Glitch Effect on Barcode Tap
const barcode = document.querySelector('.barcode');
if (barcode) {
    barcode.addEventListener('click', function() {
        const glitch = document.createElement('div');
        glitch.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:white;z-index:1000;opacity:0.5;';
        document.body.appendChild(glitch);
        setTimeout(() => glitch.remove(), 150);
    });
}

/* script.js */

// Typewriter Function
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

// Runaway No Button Logic
const noBtn = document.getElementById('noBtn');
if (noBtn) {
    const moveButton = (e) => {
        // Keeps button within safe viewable area
        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 50);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${Math.max(10, x)}px`;
        noBtn.style.top = `${Math.max(10, y)}px`;
        noBtn.style.zIndex = '999';
    };

    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });
    noBtn.addEventListener('mouseover', moveButton);
}

// Typewriter
document.querySelectorAll('.typewriter').forEach(el => {
    const text = el.getAttribute('data-text');
    el.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }
    setTimeout(type, 300);
});

// Runaway No Button Fix
const noBtn = document.getElementById('noBtn');
if (noBtn) {
    const moveButton = (e) => {
        // Keeps the button within 80% of the screen so it doesn't go off-edge
        const x = Math.random() * (window.innerWidth * 0.7);
        const y = Math.random() * (window.innerHeight * 0.7);
        
        noBtn.style.position = 'fixed'; // Overlays everything
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.zIndex = '999';
    };

    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });
    noBtn.addEventListener('mouseover', moveButton);
}
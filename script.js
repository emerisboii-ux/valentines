/* script.js */

// Typewriter Effect
const typeWriterElements = document.querySelectorAll('.typewriter');
typeWriterElements.forEach(el => {
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
    // Small delay before starting
    setTimeout(type, 500);
});

// The Runaway "No" Button (Mobile Optimized)
const noBtn = document.getElementById('noBtn');
if (noBtn) {
    // Add multiple event listeners for better mobile handling
    ['mouseover', 'touchstart'].forEach(evt => 
        noBtn.addEventListener(evt, function(e) {
            // Prevent default touch behavior (scrolling/clicking)
            if(evt === 'touchstart') e.preventDefault();
            
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        })
    );
    
    noBtn.addEventListener('click', () => {
        alert("Nice try, but distance can't stop this.");
    });
}
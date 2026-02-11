document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const displayBtn = document.getElementById('displayBtn');
    const clearBtn = document.getElementById('clearBtn');
    const textOutput = document.getElementById('textOutput');

    // Function to create star shower effect
    function createStarShower() {
        // Create container for stars if it doesn't exist
        let starContainer = document.getElementById('starContainer');
        if (!starContainer) {
            starContainer = document.createElement('div');
            starContainer.id = 'starContainer';
            document.body.appendChild(starContainer);
        }

        // Clear previous stars
        starContainer.innerHTML = '';
        
        // Create 50 stars
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.className = 'star';
                
                // Random position across the width
                star.style.left = Math.random() * 100 + '%';
                
                // Random animation duration (2-5 seconds)
                const duration = 2 + Math.random() * 3;
                star.style.animationDuration = duration + 's';
                
                // Random delay
                star.style.animationDelay = Math.random() * 0.5 + 's';
                
                // Random size (0.5x to 1.5x)
                const scale = 0.5 + Math.random();
                star.style.transform = `scale(${scale})`;
                
                // Random star type (different shapes)
                if (Math.random() > 0.5) {
                    star.classList.add('star-sparkle');
                }
                
                starContainer.appendChild(star);
                
                // Remove star after animation
                setTimeout(() => {
                    star.remove();
                }, duration * 1000 + 500);
            }, i * 50); // Stagger creation
        }
        
        // Auto-remove container after all animations
        setTimeout(() => {
            if (starContainer && starContainer.childNodes.length === 0) {
                starContainer.remove();
            }
        }, 8000);
    }

    // Function to display text
    function displayText() {
        const inputValue = textInput.value.trim();
        
        if (inputValue === '') {
            textOutput.innerHTML = '<p class="placeholder">El texto ingresado aparecerá aquí...</p>';
            textOutput.classList.remove('has-content');
        } else {
            textOutput.textContent = inputValue;
            textOutput.classList.add('has-content');
            
            // Check if the input is "gremy" (case insensitive)
            if (inputValue.toLowerCase() === 'gremy') {
                createStarShower();
            }
        }
    }

    // Function to clear everything
    function clearAll() {
        textInput.value = '';
        textOutput.innerHTML = '<p class="placeholder">El texto ingresado aparecerá aquí...</p>';
        textOutput.classList.remove('has-content');
        textInput.focus();
    }

    // Event listeners
    displayBtn.addEventListener('click', displayText);
    clearBtn.addEventListener('click', clearAll);

    // Also allow Enter key to display (Ctrl+Enter or Command+Enter for multiline)
    textInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            displayText();
        }
    });
});

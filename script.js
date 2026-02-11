document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const displayBtn = document.getElementById('displayBtn');
    const clearBtn = document.getElementById('clearBtn');
    const textOutput = document.getElementById('textOutput');

    // Function to display text
    function displayText() {
        const inputValue = textInput.value.trim();
        
        if (inputValue === '') {
            textOutput.innerHTML = '<p class="placeholder">El texto ingresado aparecerá aquí...</p>';
            textOutput.classList.remove('has-content');
        } else {
            textOutput.textContent = inputValue;
            textOutput.classList.add('has-content');
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

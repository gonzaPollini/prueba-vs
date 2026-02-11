// Objeto para gestionar la inserción de texto
const textManager = {
    displayElement: null,
    inputElement: null,
    addButton: null,
    textItems: [],

    // Inicializar el gestor
    init: function() {
        this.displayElement = document.getElementById('textDisplay');
        this.inputElement = document.getElementById('textInput');
        this.addButton = document.getElementById('addButton');
        
        this.setupEventListeners();
        this.inputElement.focus();
    },

    // Configurar eventos
    setupEventListeners: function() {
        // Evento del botón
        this.addButton.addEventListener('click', () => {
            this.addText();
        });

        // Evento de teclado en el input (Ctrl + Enter)
        this.inputElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.addText();
            } else if (e.key === 'Enter') {
                this.addText();
            }
        });

        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            this.handleKeyNavigation(e);
        });
    },

    // Agregar texto al display
    addText: function() {
        const text = this.inputElement.value.trim();
        
        if (text === '') {
            alert('Por favor, ingresa un texto antes de agregarlo.');
            this.inputElement.focus();
            return;
        }

        // Crear elemento de texto
        const textItem = document.createElement('div');
        textItem.className = 'text-item';
        textItem.textContent = text;
        
        // Agregar timestamp
        const timestamp = new Date().toLocaleTimeString('es-ES');
        const timeSpan = document.createElement('span');
        timeSpan.style.fontSize = '0.8em';
        timeSpan.style.color = '#999';
        timeSpan.style.marginLeft = '10px';
        timeSpan.textContent = `(${timestamp})`;
        textItem.appendChild(timeSpan);

        // Agregar al display
        this.displayElement.appendChild(textItem);
        this.textItems.push(text);

        // Limpiar input y enfocar
        this.inputElement.value = '';
        this.inputElement.focus();

        // Scroll al último elemento
        textItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },

    // Manejar navegación por teclado
    handleKeyNavigation: function(e) {
        const activeElement = document.activeElement;
        
        // Navegación especial con flechas
        if (e.key === 'ArrowDown' && activeElement === this.inputElement) {
            e.preventDefault();
            this.addButton.focus();
        } else if (e.key === 'ArrowUp' && activeElement === this.addButton) {
            e.preventDefault();
            this.inputElement.focus();
        }
    },

    // Obtener todos los textos
    getAllTexts: function() {
        return this.textItems;
    },

    // Limpiar todos los textos
    clearAll: function() {
        this.displayElement.innerHTML = '';
        this.textItems = [];
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    textManager.init();
});

// Exponer el objeto globalmente para pruebas
window.textManager = textManager;

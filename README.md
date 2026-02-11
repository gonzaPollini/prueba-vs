# prueba-vs

## Interfaz de Inserción de Texto

Una aplicación web simple que permite insertar y mostrar texto en pantalla mediante navegación por teclado.

### Características

- ✨ Interfaz intuitiva en español
- ⌨️ Navegación completa por teclado
- 📝 Inserción de texto con timestamps
- 🎨 Diseño moderno y responsive
- 🚀 Sin dependencias externas (HTML, CSS, JavaScript puro)

### Cómo usar

1. **Abrir la aplicación:**
   - Abrir el archivo `index.html` directamente en un navegador, o
   - Usar un servidor local (recomendado):
     ```bash
     python3 -m http.server 8000
     ```
     Luego navegar a `http://localhost:8000`

2. **Insertar texto:**
   - Escribir texto en el campo de entrada
   - Presionar **Enter** para agregar el texto
   - O presionar **Tab** para navegar al botón y luego **Enter**
   - El texto aparecerá en la sección "Texto Mostrado" con un timestamp

3. **Navegación por teclado:**
   - **Tab**: Navegar entre elementos
   - **Enter**: Agregar texto desde el campo o botón
   - **↓ / ↑**: Navegación rápida entre campo y botón

### Estructura del proyecto

```
prueba-vs/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y diseño
├── script.js       # Lógica de la aplicación (objeto textManager)
└── README.md       # Este archivo
```

### Objeto textManager

La aplicación utiliza un objeto JavaScript (`textManager`) que gestiona toda la funcionalidad:

- `init()`: Inicializa la aplicación
- `addText()`: Agrega texto al display
- `getAllTexts()`: Obtiene todos los textos insertados
- `clearAll()`: Limpia todos los textos

### Capturas de pantalla

**Estado inicial:**
![Estado inicial](https://github.com/user-attachments/assets/8d5aa0c5-a6b0-4df5-9a40-5ff1c9692bff)

**Con textos insertados:**
![Funcionando](https://github.com/user-attachments/assets/e07e18a2-1935-4d4c-88a3-0ae846502406)
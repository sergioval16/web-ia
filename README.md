# INUVIA - Agencia de IA y Automatizaciones

Este es un sitio web profesional para INUVIA, una agencia especializada en soluciones de inteligencia artificial y automatizaciones. El sitio cuenta con un diseño moderno con tema oscuro, animaciones fluidas y transiciones interactivas.

## Características

- Diseño responsivo con tema oscuro
- Animaciones y transiciones al desplazarse por la página
- Cursor personalizado interactivo
- Efectos de desplazamiento suave
- Menú móvil adaptable
- Secciones para presentar servicios, testimonios y contacto
- Banner de cookies

## Tecnologías utilizadas

- HTML5
- CSS3 (animaciones, transiciones, variables CSS)
- JavaScript (vanilla)
- Font Awesome para iconos
- Google Fonts (Inter)

## Estructura de archivos

```
web/
├── css/
│   └── styles.css
├── img/
│   └── hero-image.svg
├── js/
│   └── main.js
├── index.html
└── README.md
```

## Cómo ejecutar localmente

Simplemente abre el archivo `index.html` en tu navegador web para ver el sitio, o utiliza un servidor local como Python:

```bash
# Si tienes Python instalado
python -m http.server 8000
```

Luego visita `http://localhost:8000` en tu navegador.

## Cómo subir a GitHub y crear un sitio web público

Sigue estos pasos para subir el proyecto a GitHub y hacer que esté disponible públicamente a través de GitHub Pages:

### 1. Crear un repositorio en GitHub

1. Ve a [GitHub](https://github.com/) e inicia sesión (o crea una cuenta si no tienes una)
2. Haz clic en el botón "+" en la esquina superior derecha y selecciona "New repository"
3. Nombra tu repositorio (por ejemplo, "inuvia-website")
4. Puedes añadir una descripción opcional
5. Elige si quieres que el repositorio sea público (recomendado para GitHub Pages) o privado
6. Haz clic en "Create repository"

### 2. Subir el código a GitHub desde tu ordenador

Abre una terminal o línea de comandos y ejecuta:

```bash
# Navega hasta la carpeta del proyecto
cd c:\Users\Sergi\OneDrive\Escritorio\pruebas\web

# Inicializa un repositorio Git
git init

# Añade todos los archivos al staging
git add .

# Crea el primer commit
git commit -m "Versión inicial del sitio web de INUVIA"

# Conecta tu repositorio local con el repositorio remoto de GitHub
# Reemplaza 'TU_USUARIO' con tu nombre de usuario de GitHub y 'NOMBRE_REPOSITORIO' con el nombre que elegiste
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPOSITORIO.git

# Sube los cambios a GitHub
git push -u origin master
```

Si estás usando la rama principal como 'main' en lugar de 'master', usa:

```bash
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings" (Configuración)
3. Desplázate hacia abajo hasta la sección "GitHub Pages"
4. En "Source", selecciona la rama principal (main o master)
5. Haz clic en "Save" (Guardar)

GitHub te proporcionará una URL (generalmente en el formato `https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO`) donde tu sitio web estará disponible públicamente.

### 4. Actualizar el sitio web

Cada vez que quieras actualizar el sitio web, simplemente:

```bash
# Añade los cambios
git add .

# Crea un nuevo commit
git commit -m "Descripción de los cambios"

# Sube los cambios a GitHub
git push
```

GitHub Pages actualizará automáticamente tu sitio web después de unos minutos.

## Personalización

- Los colores principales se pueden modificar en las variables CSS al inicio del archivo `styles.css`
- Las imágenes se pueden reemplazar en la carpeta `img/`
- El contenido se puede editar directamente en el archivo `index.html`

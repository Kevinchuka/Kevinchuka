# 🌼 Flores amarillas virtuales

Un regalo hecho con cariño: una sorpresa con botón, un mensaje bonito,
flores amarillas animadas (tulipanes, girasoles y flores al azar) y un
botón para descargar el recuerdo como imagen.

Regalo del **21 de septiembre** 💛

## ¿Qué incluye?
- **Pantalla de sorpresa** con un botón CTA que late para invitar a presionar.
- **Mensaje personal** con dedicatoria de amor.
- **Jardín animado** de flores amarillas: tulipanes 🌷, girasoles 🌻, margaritas 🌼 y flores variadas.
- **Pétalos cayendo** de fondo para un ambiente mágico.
- **Botón "Descargar el recuerdo"** que guarda la escena como imagen PNG.
- **Botón "Ver de nuevo"** para repetir la sorpresa.

## Archivos
- `index.html` — estructura de la página.
- `styles.css` — estilos y animaciones.
- `script.js` — flores, pétalos, navegación y descarga de imagen.
- `vercel.json` — configuración para Vercel.

## Cómo verlo localmente
Solo abre `index.html` en tu navegador. No necesita build ni dependencias
(la librería para descargar la imagen se carga desde un CDN).

Si prefieres un servidor local:

```bash
python3 -m http.server 3000
# luego abre http://localhost:3000
```

## Cómo publicarlo en Vercel
1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. Pulsa **Add New → Project** e importa este repositorio.
3. Selecciona la rama `claude/virtual-yellow-flowers-gift-bvkmq9`
   (o haz merge a `main` primero).
4. Framework Preset: **Other** (es un sitio estático, sin build).
   - Build Command: *(vacío)*
   - Output Directory: `./`
5. Pulsa **Deploy**. ¡Listo! 💛

> No hace falta configurar nada más: Vercel sirve los archivos estáticos
> directamente.

# Mi Guarrita 💕

## Qué hay en esta carpeta
- `index.html` → la página web (contador + botones + fotos de fondo)
- `fotos/` → todas las fotos que se usan de fondo
- `api/click.js` → función que suma un click a un botón
- `api/counts.js` → función que devuelve los contadores actuales
- `package.json` → dependencias necesarias (Vercel KV)

## Pasos para subirlo

1. Sube todo el contenido de esta carpeta a un repositorio de GitHub (que `index.html`, `api/` y `package.json` queden en la raíz del repo).
2. Entra a [vercel.com](https://vercel.com), importa ese repositorio como nuevo proyecto y dale a **Deploy**.
3. Cuando termine el primer despliegue, ve a tu proyecto en Vercel → pestaña **Storage** → **Create Database** → elige **KV** → conéctala al proyecto. Esto añade solo las variables de entorno necesarias.
4. Vercel volverá a desplegar automáticamente. Cuando acabe, abre la URL de tu proyecto y ya debería funcionar todo: el contador de tiempo y los botones compartidos con quien entre a la página.

## Notas
- No hace falta tocar nada del código de `api/click.js` o `api/counts.js`, ya están listos para usarse en cuanto conectes la base de datos KV.
- Si algún día quieres añadir o quitar botones, edítalo en el array `buttonsData` dentro de `index.html`, y añade/quita esa misma clave en el array `KEYS` de `api/counts.js`.

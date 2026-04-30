# operador

Landing page construida con Vue 3 + Vite para **Operador Logístico Policarpa**, con enfoque profesional y social orientado a educación popular.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

Vite mostrará una URL local, normalmente `http://localhost:5173`.

## Build de producción

```bash
npm run build
```

La salida queda en `dist/`.

## Despliegue en GitHub Pages

El proyecto ya queda preparado para publicar con GitHub Pages usando GitHub Actions.

1. Sube el proyecto al repositorio `https://github.com/olayita15/operador`.
2. En GitHub, entra a `Settings > Pages`.
3. En `Build and deployment`, selecciona `GitHub Actions`.
4. Cada push a `main` disparará el workflow `.github/workflows/deploy.yml`.

La URL esperada de publicación será:

```text
https://olayita15.github.io/operador/
```

## Archivos principales

- `index.html`
- `src/main.js`
- `src/App.vue`

## Publicar en GitHub

Ejecuta estos comandos desde esta carpeta:

```bash
echo "# operador" >> README.md
git init
git add README.md .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/olayita15/operador.git
git push -u origin main
```

Si el repositorio remoto ya existe con contenido, conviene revisar antes de hacer `push` para evitar conflictos.

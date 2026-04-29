# Allard Quek - Portfolio

Modernized React portfolio built with **Vite**, **React 19**, and **MUI v9**.

## 🚀 Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Runtime/Package Manager:** Bun
- **UI:** Material UI v9 (with @mui/styles compat bridge)
- **Deployment:** GitHub Pages

## 🛠️ Development

This project uses **Bun**. Ensure you have it installed before starting.

### Start Development Server
```bash
bun start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
bun run build
```
Builds the app for production into the `build/` folder.

### Deploy to GitHub Pages
```bash
bun run deploy
```
This runs the build and automatically pushes the contents of the `build/` folder to the `master` branch for hosting.

## 📈 Optimization Notice
This project was migrated from Create React App to Vite to solve memory bloat issues. 
- **Previous Memory Footprint:** ~1GB (Webpack/CRA)
- **Current Memory Footprint:** ~10MB (Vite/Native ESM)

## 🌐 Live URL
[https://allardquek.github.io/](https://allardquek.github.io/)

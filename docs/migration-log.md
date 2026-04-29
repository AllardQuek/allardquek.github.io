# Project Migration & Troubleshooting Log

This document tracks the issues encountered and the fixes applied while modernizing this portfolio from an outdated CRA (Create React App) setup to a modern Bun-powered React 19 environment.

## 1. Package Manager Migration
**Issue:** Legacy project used `npm` with an outdated `package-lock.json`.
**Fix:** 
- Switched to `bun` for faster performance.
- Removed `package-lock.json` and `node_modules`.
- Ran `bun install` to generate `bun.lockb`.
- Updated `predeploy` script in `package.json` to use `bun run build`.

## 2. React 19 Upgrade
**Issue:** Project was running on React 17.
**Fix:**
- Updated `react` and `react-dom` to `v19`.
- Refactored `src/index.js` to use the new `createRoot` API instead of the deprecated `ReactDOM.render`.

## 3. Material UI (MUI) Migration (v4 -> v9)
**Issue:** Legacy `@material-ui/core` and `@material-ui/icons` are deprecated and incompatible with React 19.
**Fix:**
- Uninstalled `@material-ui` packages.
- Installed `@mui/material`, `@mui/icons-material`, `@emotion/react`, and `@emotion/styled`.
- **Imports:** Replaced all `@material-ui/core` paths with `@mui/material`.
- **Icons:** Replaced all `@material-ui/icons` paths with `@mui/icons-material`.
- **Legacy Styling:** Since the project uses JSS (`makeStyles`), installed `@mui/styles` as a bridge.
- **Theme Issues:** 
    - Encountered "makeStyles is no longer exported from @mui/material/styles". Fixed by importing from `@mui/styles`.
    - Encountered "Styles argument provided is invalid... without a theme". Fixed by wrapping the app in both `ThemeProvider` (from `@mui/material`) and `StylesProvider` (from `@mui/styles`) in `App.js`.
- **Specific Icon Names:** `WorkOutline` was renamed to `WorkOutlineOutlined` in the latest MUI icons package.

## 4. Particle System Replacement
**Issue:** `react-particles-js` is deprecated and broken with modern `tsparticles` engines.
**Fix:**
- Replaced with `react-tsparticles` and `tsparticles`.
- Refactored `src/Components/Particle.js` to use the `init` callback and the new `options` schema.

## 5. Case-Sensitive Import Fixes
**Issue:** The folder on disk was named `Components`, but many imports were using `./components/`. This works on some OSes but fails in strict environments and the latest Webpack/Bun builders.
**Fix:** Bulk updated all imports to use the correct `Components` casing.

## 6. Dependency Path Errors
**Issue:** `react-player/youtube` was failing due to package export changes.
**Fix:** Simplified import to `import ReactPlayer from "react-player"`.

## Summary of Commands
- `bun install`: Dependency management.
- `bun run build`: Production build validation.
- `bun start`: Local development server.

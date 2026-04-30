---
name: Command Deck
colors:
  surface: '#f5faf8'
  surface-dim: '#d6dbd9'
  surface-bright: '#f5faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f5f2'
  surface-container: '#eaefed'
  surface-container-high: '#e4e9e7'
  surface-container-highest: '#dee4e1'
  on-surface: '#171d1c'
  on-surface-variant: '#3d4947'
  inverse-surface: '#2c3130'
  inverse-on-surface: '#edf2f0'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#555f6f'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f3'
  on-secondary-container: '#596373'
  tertiary: '#924628'
  on-tertiary: '#ffffff'
  tertiary-container: '#b05e3d'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d9e3f6'
  secondary-fixed-dim: '#bdc7d9'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4756'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#773215'
  background: '#f5faf8'
  on-background: '#171d1c'
  surface-variant: '#dee4e1'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-default:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-strong:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  mono-meta:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  gutter: 1rem
  tile-height: 320px
---

## Brand & Style

The design system is engineered for the "power-user"—individuals who prioritize speed, keyboard-driven navigation, and information density. The aesthetic is rooted in **Minimalism** with an **"OS-level" utility** feel, stripping away decorative flourishes in favor of structural clarity. 

It evokes a sense of technical competence and calm efficiency. By utilizing a flat design language that replaces depth-based shadows with architectural borders, the system achieves a sophisticated, "pro-tool" appearance. The emotional response is one of control and precision, positioning the application as a high-performance engine for digital tasks rather than a casual consumer app.

## Colors

The palette is built on a foundation of warm neutrality to reduce eye strain during long working sessions. 
- **Background:** A warm off-white (#F9F9F8) serves as the canvas, providing a softer contrast than pure white.
- **Primary:** A crisp, high-visibility Teal (#0D9488) is used exclusively for action states, focus indicators, and primary brand accents.
- **Neutral:** Dark grey (#1F2937) provides high-legibility text, while a lighter grey (#E5E7EB) defines the structural borders.

Color is used sparingly and functionally: it indicates "active" status or "success" rather than being used for decorative fills.

## Typography

This design system utilizes a dual-font strategy to differentiate between content and metadata. 
- **Sans-Serif (Inter):** Used for all primary reading experiences, headings, and interface text. It is chosen for its exceptional legibility and neutral character.
- **Monospace (JetBrains Mono):** Used for technical metadata, keyboard shortcuts (KBD), small UI hints, and status labels. The monospace font signals "system information" to the user, helping them visually parse data-heavy screens.

Lowercase is preferred for mono labels to maintain a technical, "terminal" aesthetic, while headlines use traditional sentence case for readability.

## Layout & Spacing

The layout follows a **Fixed-Grid Modular** philosophy. The core interface is composed of fixed-height tiles arranged in a responsive grid. 
- **Rhythm:** A 4px baseline grid ensures consistent vertical and horizontal alignment.
- **Tiles:** Components are housed in containers with a standard `tile-height`. Content that exceeds this height is managed via internal scrolling or a vertical "expansion" animation that pushes other tiles down.
- **Density:** High information density is encouraged. Margins and gutters are kept tight (16px) to maximize the "Command Center" feel, ensuring that more data is visible at a single glance without overwhelming the user.

## Elevation & Depth

This design system rejects shadows in favor of **Bold Borders and Tonal Layering**. 
- **Borders:** All interactive surfaces and containers are defined by a 1px solid border. 
- **Z-Index Strategy:** Depth is communicated through stacking order. When a command palette or modal is triggered, it appears as a flat layer with a high-contrast border, effectively "floating" over the interface without the use of blurs or drop-shadows.
- **Focus States:** Instead of glowing or lifting, focused elements receive a 2px teal border, making the user's current position within the app unmistakable.

## Shapes

The shape language is **Soft (0.25rem)**. While a strictly sharp 0px corner can feel too aggressive and brutalist, a 4px corner radius maintains the "engineered" feel while providing enough visual comfort for modern hardware displays.

- **Small elements (buttons, inputs):** 4px (rounded-sm).
- **Large elements (tiles, modals):** 8px (rounded-lg).
- **Indicators:** Status pips and tags may use a pill-shape to distinguish them from interactive buttons.

## Components

### Buttons & Inputs
Buttons are flat with a 1px border. The primary button uses the Teal background with white text, while secondary buttons use the warm grey background and a dark grey border. Inputs are rectangular with monospace placeholder text.

### Command Palette
The central hub of the design system. It is a centered, high-contrast modal featuring a search input, a list of actionable commands, and keyboard shortcut hints (using the mono font) aligned to the right of each list item.

### Fixed-Height Tiles
Tiles have a fixed vertical constraint. They feature a "Title Bar" with a monospace label and a "Status Indicator" (a small teal dot for active, grey for idle). Content within tiles can scroll vertically with a hidden or minimalist scrollbar.

### Keyboard Shortcuts (KBD)
KBD elements are styled with a subtle light-grey background and a 1px border, utilizing the monospace font at a smaller scale (11px) to indicate "Utility" functionality.

### Status Indicators
Small, circular pips or thin horizontal bars at the top of tiles that change color based on the system state, providing immediate visual feedback without requiring text.
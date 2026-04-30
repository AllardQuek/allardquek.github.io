## Plan: Minimal, Efficient Portfolio

Shift from spatial HUD to a clean, distraction-free layout optimized for readability and navigation speed. Keep visual identity (typography + subtle grid) but remove spatial panning and overlapping layers.

**Steps**
1. Replace the spatial canvas with a vertical, section-based layout: Hero, Bio, Work, Labs, Contact.
2. Convert the HUD nav into a simple sticky top bar with anchor links and active state highlight.
3. Remove camera transforms and coordinates; transitions become subtle fades/slide-ins only.
4. Normalize spacing, reduce card density, and ensure each section fits comfortably in viewport widths.
5. Keep the background subtle and static (no parallax), ensure scroll is smooth and consistent.
6. Audit responsiveness for mobile: collapse grids to single column, reduce font sizes and padding.

**Relevant files**
- App.jsx — remove spatial motion, render sections in order, add sticky nav.
- WorkConstellation.jsx — simplify grid to single column on smaller widths.
- LabCluster.jsx — align to section layout and reduce visual noise.
- App.css or index.css — global layout, typography, background, and scroll behavior.

**Verification**
1. Scroll from top to bottom; no overlaps, no blank zones, no jank.
2. Navigation links jump to the correct section and the active state updates.
3. Readability check on desktop and mobile sizes.

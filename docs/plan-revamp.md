## Consolidated Plan: Command Deck v1

This merges the two plans into one direction: a **single-screen, power-user portfolio** that is faster and clearer than a basic hero-plus-sections site. The spatial HUD concept is retired. The interface becomes a **Command Deck**: compact, literal, scannable, and keyboard-friendly, with depth only when the user asks for it.

**Confirmed decisions**
- Desktop target is effectively zero-scroll within one viewport, with graceful vertical scroll only on mobile.
- Labels stay literal: About & Now, Projects, Experience, Principles, Contact.
- `⌘K` / `Ctrl+K` remains an accelerator hint, not the core navigation surface.
- Tile expansion is **mixed** for best UX: most tiles expand in place, while Projects opens in a side sheet or drawer.
- Only 2 to 3 hero projects should be visible in the main layout.

**Layout**
- Top bar is always visible with name, role, location, thesis line, primary links, and a visible `⌘K` hint.
- Left column: About & Now, then How I Work.
- Center column: Selected Work as the dominant tile.
- Right column: Experience, then Contact.
- Mobile: same content stacked vertically, preserving the same mental model.

**Content skeleton**
- Thesis: one factual sentence describing you as a software / AI engineer focused on agents, infrastructure, and tooling.
- About & Now: 3 to 4 concise sentences plus 3 to 5 concrete “now” items.
- Principles: 3 short one-line principles in collapsed state.
- Selected Work: 2 to 3 hero projects with title, problem, role, and outcome.
- Experience: condensed timeline in collapsed state, then detailed bullets when expanded.
- Contact: one primary action plus concise links.

**Interaction model**
- About, Principles, Experience, and Contact expand in place so the user never loses context.
- Projects opens a side sheet or drawer so the main overview stays intact.
- Command palette actions can be deferred to v2 unless they clearly improve speed, but the shortcut hint should still be visible in v1.
- Motion should be minimal: quick fades, subtle scale, short expansion transitions.

**Visual direction**
- Neutral shell with one restrained accent.
- Border-led, utility-like surfaces rather than decorative depth.
- Distinctive typography instead of generic system stacks.
- Static background, no parallax, no spatial movement, no glow-heavy styling.

**Implementation files**
- App.jsx for the new deck layout and sticky navigation.
- BioCluster.jsx for the About & Now tile.
- WorkConstellation.jsx for the Projects tile.
- LabCluster.jsx for Experience and supporting signals.
- index.css for layout, typography defaults, and scroll behavior.
- DESIGN.md for the design-system update once you approve this direction.

**Verification**
- Desktop should show the core story in one screen without scrolling.
- Mobile should stack cleanly and remain readable.
- Tile expansion should feel intentional, fast, and context-preserving.
- Labels and shortcuts should be obvious enough that no explanation is needed.

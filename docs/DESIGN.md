---
name: Command Deck
version: v1
philosophy: "A one-screen, power-user portfolio that is faster and clearer than a basic scrolling site."
---

## Purpose

Command Deck v1 is a compact personal portfolio designed for speed, clarity, and information scent. The page should answer four questions immediately: who you are, what you do, what you’ve shipped, and how to contact you.

The interface should feel like a refined productivity app rather than a marketing site. Minimalism is intentional: every visible element should earn its place.

## Core Rules

1. Desktop targets one 100vh view with no page scrolling required for the main story.
2. Mobile can scroll vertically, but the same mental model must remain intact.
3. Labels stay literal. Use names like About & Now, Projects, Experience, Principles, and Contact.
4. Keyboard shortcuts are accelerators, not prerequisites.
5. Depth comes from borders, spacing, and hierarchy, not glow or heavy shadows.

## Information Architecture

### Top Bar

- Left: name, role, location.
- Center: one-line thesis.
- Right: links plus a visible `⌘K` / `Ctrl+K` hint.

### Main Deck

- Left column: About & Now, Principles.
- Center column: Selected Work, the dominant tile.
- Right column: Experience, Contact.

### Expansion Model

- About, Principles, Experience, and Contact expand in place.
- Projects opens in a side sheet or drawer so details can deepen without collapsing the overview.
- Keep the summary visible even when a tile is expanded.

## Content Strategy

### Thesis

One factual line. Example structure:

> Software engineer in Singapore building AI agents, infrastructure, and developer tooling.

### About & Now

- 3 to 4 short sentences max.
- 3 to 5 concrete “Now” bullets.
- Keep it factual and present-tense.

### Principles

- 3 short one-line principles in the collapsed state.
- Expanded state can explain each principle briefly, with one concrete example if useful.

### Selected Work

- Show only 2 to 3 hero projects.
- Each project should have title, problem, role, and outcome.
- Include tags for scanability, but do not over-tag.

### Experience

- Collapse into a short timeline with major roles only.
- Expand to structured bullets focused on outcomes.

### Contact

- One primary action: email.
- Secondary links: GitHub, LinkedIn, and any other relevant profiles.

## Visual System

### Tone

The tone is neutral, precise, and calm. The interface should feel like a command surface: useful, not performative.

### Color

- Base: warm-neutral or cool-neutral shell.
- Accent: one restrained teal/green-blue value.
- Neutrals carry the layout; accent only marks intent, focus, and active state.

### Typography

- Use a distinctive sans-serif for the main interface.
- Use JetBrains Mono only for commands, metadata, and small utility labels.
- Avoid generic system-style typography as the primary visual voice.

### Motion

- Motion should be short and informative.
- Tile expansion: fast, subtle, and context-preserving.
- Avoid parallax, long pans, or motion that exists only for decoration.

### Surfaces

- Prefer 1px borders over soft shadows.
- Keep radii modest.
- Use tonal layering for focus rather than hover gimmicks.

## Components

### Tiles

- Fixed, legible, and scannable.
- Each tile has a clear title bar and a compact summary.
- Expanded content should remain readable without overwhelming the rest of the deck.

### Side Sheet

- Used primarily for project detail.
- Keeps the main overview intact while allowing deeper reading.

### Command Hint

- `⌘K` / `Ctrl+K` should be visible in the top bar.
- The palette may be deferred to a later version, but the affordance should remain obvious.

## Responsive Behavior

### Desktop

- Three-column deck.
- No page scrolling required for the first read.
- Everything important visible in one view.

### Mobile

- Stack vertically.
- Allow normal page scroll.
- Maintain the same section names and reading order.

## Acceptance Criteria

1. A reader can understand who you are and what you do within 10 to 20 seconds.
2. The page feels faster and clearer than a standard portfolio.
3. The user never needs to decode a metaphor to find information.
4. Expansion reveals detail without destroying orientation.
5. The visual system feels intentional, restrained, and professional.

## Implementation Notes

- Keep the current portfolio data grounded in the resume source.
- Keep the interface compact enough to fit the deck model.
- Treat any additional interaction as a shortcut to visible information, not a replacement for clarity.
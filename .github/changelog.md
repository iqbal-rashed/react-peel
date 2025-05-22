# Changelog

This project uses semantic versioning to clearly communicate changes. Major versions introduce breaking changes, minor versions add backward-compatible features, and patch versions include backward-compatible bug fixes or improvements. This helps users understand the impact of each release and update safely.

---

## [2.0.0] - 2025-05-22

### Added

- Initial React-NextJS conversion of original Peel.js library.
- Created `PeelWrapper` React component with full Peel.js API integration.
- Added React hooks (`useEffect`, `useRef`) for Peel.js lifecycle and updates.
- Created `PeelTop`, `PeelBack`, and `PeelBottom` React components with `forwardRef`.
- Implemented CSS injection via `useInitializeCss` hook.
- Supported Peel.js props such as `corner`, `mode`, `constraints`, `fadeThreshold`, `peelPosition`, `timeAlongPath`, `peelPath`.
- Added support for event handlers: `handleDrag`, `handlePress`.

### Changed

- Converted DOM manipulation from vanilla JS to React declarative lifecycle.
- Normalized Peel corners handling with TypeScript enums.
- Added prop-based updating for Peel.js state on React prop changes.
- Enhanced cleanup on unmount to avoid memory leaks.

### Fixed

- Fixed Peel.js reference updates when props change.
- Corrected Peel.js state updates for peel position, corner, mode, and constraints.

### Removed

- Removed global CSS files in favor of injected styles.
- Removed direct DOM queries outside React refs.

---

## [Unreleased]

- Planned improvements and bug fixes.

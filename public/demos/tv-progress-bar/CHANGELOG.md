# Changelog

All notable changes to `@todovue/tv-progress-bar` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-01-27

### Changed
- Simplified the file list in `package.json` to include only essential assets.
- Simplified the build configuration by removing demo-specific logic.
- Enhanced GitHub Actions workflows to automate npm package publishing and GitHub release creation.
- Moved the `@todovue/tv-demo` component import from main.js to `Demo.vue` to localize its usage.
- Updated build commands to include `README.md` and `CHANGELOG.md` files in the public directory during the build process.

### Added
- Included the `src` directory in the `package.json` files list to ensure component source files are bundled in the package distribution.

### Removed
- Eliminated the global import of the `@todovue/tv-demo` component from `main.js`.

### Dependencies
- Updated `@todovue/tv-demo` to `^1.4.11`.
- Updated `vue` to `^3.5.27`.
- Updated `sass` to `^1.97.3`.

## [1.1.0] - 2026-01-21

### Added
- **Gradient Support**: New `gradient` prop (Array) to create modern, multicolor progress bars.
- **Glow Effect**: New `glow` prop (Boolean) and `glowColor` (String) to add a neon-like depth effect.
- **Customizable Transitions**: New `duration` and `easing` props to control the progress bar animation smoothness and feel.
- New demo variants in the documentation showcasing gradients, glow effects, and custom easing functions.
- - **Vertical Orientation**: New `orientation` prop to support side progress bars (left/right). Perfect for modern documentation or blogs.
- **Reading Checkpoints**: New `checkpoints` prop (Array) to show indicators at specific progress points (e.g., [25, 50, 75]).
- **Progress Labels**: New `showLabel` and `labelPosition` props to display the percentage inside the bar or as a floating bubble.
- **Configurable Positioning**: New `position` prop to fix the bar at the `top`, `bottom`, `left`, `right`, or even use `sticky` behavior.
- **Custom Width**: New `width` prop for vertical orientation (default: '4px').

### Updated
- `TvProgressBar` internal styles now use dynamic transitions and backgrounds via `:style` for better flexibility.
- Documentation updated with detailed prop descriptions and usage examples for new aesthetic features.
- Refactored internal structure to support both horizontal and vertical layouts.
- Enhanced CSS for track background and checkpoint indicators.
- Added new demo variants in the documentation.

### Dependencies
- Updated `@todovue/tv-demo` to `^1.4.4`.
- Updated `sass` to `^1.97.2`.
- Updated `vite` to `^7.3.1`.

## [1.0.0] - 2026-01-06

### Added
- Initial release of TvProgressBar component
- Real-time reading progress tracking based on scroll position
- Flexible target selection (CSS selector, element reference, or DOM element)
- Configurable `height` prop for progress bar thickness (default: '4px')
- Configurable `color` prop for custom progress bar colors
- `offsetTop` prop to account for fixed headers (default: 0)
- `offsetBottom` prop to account for fixed footers (default: 0)
- `zIndex` prop for controlling stacking order (default: 1200)
- `disabled` prop to conditionally show/hide the progress bar (default: false)
- Smooth linear transitions with 120ms duration
- Reduced motion support via `prefers-reduced-motion` media query
- SSR-safe implementation with proper window/document guards
- `useProgressBar` composable for custom progress implementations
- ResizeObserver support for responsive content tracking
- RequestAnimationFrame optimization for smooth performance
- Automatic recalculation on window scroll, resize, and load events
- Template ref support for target element selection
- `recalculate()` exposed method for manual progress updates
- Proper cleanup of event listeners and observers on unmount
- ARIA accessibility attributes (role, aria-label, aria-valuemin, aria-valuemax, aria-valuenow)
- Pointer-events: none to avoid interference with page interactions
- TypeScript support with type definitions
- Nuxt 3/4 module support
- Comprehensive documentation and usage examples
- Demo playground with multiple configuration examples

[1.1.1]: https://github.com/TODOvue/tv-progress-bar/pull/3/files
[1.1.0]: https://github.com/TODOvue/tv-progress-bar/pull/2/files
[1.0.0]: https://github.com/TODOvue/tv-progress-bar/pull/1/files

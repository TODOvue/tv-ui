# Changelog

All notable changes to `@todovue/tv-footer` will be documented in this file.

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
- Added `newsletter` properties to `useFooter` composable return.
- Added new styles for newsletter form and back-to-top button.

### Dependencies
- Updated `@todovue/tv-demo` to `^1.4.4`.
- Updated `sass` to `^1.97.2`.
- Updated `vite` to `^7.3.1`.

### Changed
- Enhanced footer styles to improve visual consistency across the application.
- Improved responsiveness of the footer component for better mobile and tablet compatibility.

## [1.0.0] - 2026-01-07

### Added
- Initial release of TvFooter component
- Responsive grid layout (1 column mobile, 2 tablet, 4 desktop)
- Brand section with logo and name display support
- Version display capability
- Multiple navigation sections with titles and links
- Social media links with icon support (iconUrl and icon class)
- Legal links section (Privacy, Terms, etc.)
- Dynamic copyright with automatic year replacement (`{year}` placeholder)
- Light/Dark mode support built-in
- SSR-safe implementation (Nuxt 3 compatible)
- `useFooter` composable for custom implementations
- TypeScript support with type definitions
- Semantic HTML structure for accessibility
- ARIA labels and proper link attributes
- External link safety (`rel="noopener noreferrer"`)
- Smooth hover effects and transitions
- Backdrop blur effect on social icons
- Comprehensive documentation and examples

[1.1.1]: https://github.com/TODOvue/tv-footer/pull/3/files
[1.1.0]: https://github.com/TODOvue/tv-footer/pull/2/files
[1.0.0]: https://github.com/TODOvue/tv-footer/pull/1/files

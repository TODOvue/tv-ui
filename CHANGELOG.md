# Changelog

All notable changes to `@todovue/tv-ui` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Dependencies
- Updated `@vitejs/plugin-vue` to version `6.0.4`.
- Updated `@todovue/tv-foote` to version `1.1.3`.

## [1.0.0] - 2026-01-30

### Dependencies
- Updated `@todovue/tv-progress-bar` to version `1.1.2`.
- Updated `@todovue/tv-toc` to version `1.2.0`.
- Updated `@todovue/tv-footer` to version `1.1.2`.
- Updated `@todovue/tv-menu` to version `1.1.5`.
- Updated `@todovue/tv-article` to version `1.3.5`.
- Updated `@todovue/tv-scroll-top` to version `1.0.4`.

## [0.1.3] - 2026-01-28

### Changed
- Enhanced the `setup` function to dynamically resolve module aliases for `highlight.js` and `markdown-it`.

## [0.1.2] - 2026-01-28

### Dependencies
- Added `highlight.js` as a dependency to support syntax highlighting features within the UI components.
- Added `markdown-it` as a dependency to enable markdown parsing and rendering capabilities.

### Changed
- Simplified the `build:demo` script by removing redundant file copy commands.

## [0.1.1] - 2026-01-28

### Changed
- Migrated component style imports to `style.scss` to improve project organization and maintainability.
- Configured the `publicDir` path to dynamically adjust based on the detected demo environment settings.

### Added
- Integrated the `useAlert` hook from the `@todovue/tv-alert` package to provide enhanced alert functionality across the application.

## [0.1.0] - 2026-01-27

### Added
- Initial release of `@todovue/tv-ui`.

[1.0.0]: https://github.com/TODOvue/tv-ui/pull/5/changes
[0.1.3]: https://github.com/TODOvue/tv-ui/pull/4/changes
[0.1.2]: https://github.com/TODOvue/tv-ui/pull/3/changes
[0.1.1]: https://github.com/TODOvue/tv-ui/pull/2/changes
[0.1.0]: https://github.com/TODOvue/tv-ui/pull/1/changes

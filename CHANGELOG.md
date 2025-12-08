# Changelog

All notable changes and development work for this Hugo site will be documented in this file.

## [2025-12-08]

### Changed
- Migrated development notes from `content/notes.md` to `CHANGELOG.md` for better separation of concerns
- Project documentation now kept separate from Hugo site content

### Development Workflow
- Established CHANGELOG.md as the primary development log
- Standardized changelog format with date-based entries and categorical sections (Added, Changed, Organized)

### Added
- New blog post: "Bridging Cultures and Creating Courses: A Collaborative Journey with Jilin University"

## [2025-01-26]

### Added
- Created notice components/shortcodes for the site
  - Info, danger, tip, and warning notice types
  - Custom CSS file at `assets/css/extended/custom.css` for notice styling
  - Notice shortcode at `layouts/shortcodes/notice.html`
- Added search page functionality
  - Created search page at `content/search.md`
  - Search page uses the `search` layout
  - Added search to main menu

## [2025-09-26]

### Added
- Published two blog posts
- Created hugo-blog-publisher agent for automated blog post publishing with proper frontmatter and SEO
- Updated CLAUDE.md with site architecture and development workflow documentation

### Development Notes
- Created documentation on how to create and use agents in Claude Code
- Agents can be invoked directly, through task delegation, or automatically based on context

## [Recent Work - Prior Commits]

### Added
- Initialized Claude Code integration in the project
- Added blog-post-polisher agent (`.claude/agents/blog-post-polisher.md`)
- Created templates directory
- Added site favicon

### Changed
- Updated `.gitignore`
- Made modifications to PaperMod theme
- Cleaned up post metadata (removed redundant tags from image processing post)

### Organized
- General blog posts and documentation organization
- Project structure improvements

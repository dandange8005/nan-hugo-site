# Changelog

All notable changes and development work for this Hugo site will be documented in this file.

## [2026-05-17]

### Added
- New blog post: "Teaching an AI to Illustrate: Building a Consistent Image Generation Prompt"
  - Documents an experiment comparing AI image generation across Codex, Gemini, and Copilot
  - Includes reusable educational illustration prompt template
  - Images stored in `static/images/posts/image-generation-with-llms/`

### Optimised
- Converted all 6 post images from PNG to WebP using Sharp CLI (max 1200px wide, quality 85)
  - Total image payload reduced from ~8.5 MB to ~1.2 MB (86% reduction)
  - Updated all image references in post markdown to `.webp`

### Changed
- Converted `blog-post-polisher` from a `.claude/agents/` agent to a global skill at `~/.claude/skills/blog-post-polisher/`
  - Skill is now invoked via `/blog-post-polisher` in the main conversation rather than as a subagent
  - Added Kevin Powell writing style guide to the skill — prioritises short paragraphs, informal connectives, self-deprecating honesty, and specific detail over vague summary
  - Added explicit anti-patterns list to prevent AI-sounding prose
- Added cross-reference comments to `hugo-blog-publisher` and `portfolio-publisher` agents flagging shared site config fields that should stay in sync

## [2026-05-16]

### Changed
- Bumped `HUGO_VERSION` in `netlify.toml` from `0.159.1` to `0.161.1` to match local Hugo version and avoid build divergence
- Renamed `content/posts/2025-01-19.md` to `2025-01-19-creating-simple-image-processing-app-using-generative-ai.md` to follow date-slug naming convention (URL unchanged — slug set in frontmatter)

### Maintenance
- Set up weekly automated site health check (every Monday 9am BST) covering: Hugo version drift, PaperMod submodule updates, draft posts, and file naming consistency

## [2025-12-08]

### Changed
- Migrated development notes from `content/notes.md` to `CHANGELOG.md` for better separation of concerns
- Project documentation now kept separate from Hugo site content

### Development Workflow
- Established CHANGELOG.md as the primary development log
- Standardized changelog format with date-based entries and categorical sections (Added, Changed, Organized)

### Added
- New blog post: "Bridging Cultures and Creating Courses: A Collaborative Journey with Jilin University"
- Gallery shortcode functionality for blog posts with lightbox support
  - Added 8 workshop images to Jilin University collaboration post
  - Created organized image directory structure: `static/images/posts/[post-slug]/`
  - Gallery supports configurable columns, gap, and lightbox parameters

### Fixed
- Gallery shortcode template bug: replaced incorrect `trim` function calls with `strings.TrimSpace`
  - Fixed template error at `layouts/shortcodes/gallery.html:6-13`
  - Gallery now properly handles whitespace in image paths and captions

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

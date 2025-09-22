# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site for Nan Zhang's personal website (https://www.nanzhang.me) using the PaperMod theme. The site serves as a digital canvas showcasing blog posts, portfolio projects, and professional information about a Digital Education specialist at Cardiff University.

## Common Development Commands

### Hugo Development
- `hugo server` - Start development server with live reload (default: http://localhost:1313)
- `hugo server -D` - Start server including draft content
- `hugo` - Build static site to `public/` directory
- `hugo new posts/[post-name].md` - Create new blog post
- `hugo new portfolio/[project-name]/[project-name].md` - Create new portfolio project

### Content Management
- All content files use Markdown with YAML frontmatter
- Blog posts are in `content/posts/` with naming pattern: `YYYY-MM-DD-title.md`
- Portfolio projects are in `content/portfolio/[project-name]/` directories
- Set `draft: true` in frontmatter during content creation
- Use `showToc: true` for table of contents on longer posts

## Site Architecture

### Content Structure
- **Posts**: Blog articles in `content/posts/` with date-based naming
- **Portfolio**: Project showcases in `content/portfolio/` with custom layouts
- **Pages**: Static pages (about, archives, search, contact) in `content/`

### Theme and Customization
- Uses PaperMod theme as git submodule in `themes/PaperMod/`
- Custom layouts in `layouts/`:
  - `portfolio/list.html` - Portfolio index page layout
  - `portfolio/single.html` - Individual project page layout
  - `shortcodes/notice.html` - Custom notice shortcode

### Configuration
- Main config: `hugo.yaml`
- Base URL: https://www.nanzhang.me
- Enabled features: search, JSON output for search index, raw HTML in markdown
- Menu structure: About, Portfolio, Archives, Search (main), Contact (footer)

### Content Frontmatter Standards

#### Blog Posts
```yaml
title: Post Title
date: YYYY-MM-DD
draft: true/false
description: SEO description
showToc: true/false
tocOpen: true/false
showBreadcrumbs: true/false
cover:
  image: /images/filename.jpg
  alt: Alt text
  caption: Caption text
```

#### Portfolio Projects
```yaml
title: Project Name
description: Project description
type: portfolio
layout: portfolio/single (or portfolio/list for index)
```

## Development Workflow

1. **Creating Content**: Use Hugo's `new` command to generate files with proper frontmatter
2. **Local Development**: Run `hugo server -D` to preview including drafts
3. **Content Organization**: Follow existing naming conventions and directory structure
4. **Custom Layouts**: Modify files in `layouts/` directory for theme customizations
5. **Static Assets**: Place images and other assets in `static/` directory
6. **Building**: Run `hugo` to generate production site in `public/`

## Theme Integration

The site uses PaperMod theme with customizations for:
- Portfolio section with custom layouts
- Search functionality with JSON index
- Custom shortcodes for enhanced content formatting
- Responsive design for project showcases

When making theme-related changes, modify files in the `layouts/` directory rather than directly editing theme files to maintain upgrade compatibility.
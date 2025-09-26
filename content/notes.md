---
title: "Notes"
draft: true
description: "My notes on building the site"
---

## 2025-01-26

### Adding Notices
Today I created some notice components for the site. Here are the shortcodes I used:

{{< notice info >}}
This is a note
{{< /notice >}}
<!-- add a warning notice below -->
{{< notice danger >}}
This is a warning
{{< /notice >}}
<!-- add a tip notice below -->
{{< notice tip >}}
This is a tip
{{< /notice >}}
{{< notice warning >}}
This is a warning
{{< /notice >}}

There is also a custom css file that I added to the site to style the notices. The file is located at `assets/css/extended/custom.css`.

I've also added a notice shortcode to the site. The shortcode is located at `layouts/shortcodes/notice.html`.

### Adding a Search Page
- Added a search page to the site. The search page is located at `content/search.md`.
- The search page uses the `search` layout.
- Added search to main menu.

## 2025-09-26

- published two blog posts
- created a new to-do list
- updated CLAUDE.md with site architecture and development workflow
- created a sub agent "hugo-blog-publisher" to help with blog post publishing

### How to Create and Use Agents in Claude Code

**Creating an Agent:**
1. Use the `/agents` slash command to see available agent types
2. Create with: `@agent-[type-name]` (e.g., `@agent-hugo-blog-publisher`)
3. Agent gets specialized tools and knowledge for specific tasks

**Using an Agent:**
1. **Direct invocation**: Mention the agent by name (e.g., "use @agent-hugo-blog-publisher")
2. **Task delegation**: Provide content and ask agent to handle it (e.g., "publish this as a blog post")
3. **Automatic invocation**: Claude may invoke appropriate agents based on task context

**Agent Benefits:**
- Specialized knowledge for specific tasks
- Consistent workflows and formatting
- Reduced manual configuration
- Task-specific optimization

**Example Workflow:**
```
User: "Here's my draft blog content..."
Assistant: [Invokes hugo-blog-publisher agent automatically]
Agent: Creates properly formatted Hugo post with frontmatter, SEO, etc.
```
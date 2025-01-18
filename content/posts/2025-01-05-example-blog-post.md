---
# Essential Fields
title: Example Blog Post
date: 2025-01-02    # Publication date
draft: true        # Set to true during drafting

# SEO and Display
description: A brief, compelling summary for SEO and previews
summary: Alternative to description, shown in list views
keywords: [key, words, for, seo]
slug: custom-url    # Override the default URL

# Organization
tags: [tag1, tag2]  # More specific
categories: [cat1]  # Broader grouping
series: [series-name]  # Group related posts

# Display Options
weight: 1           # Control post ordering (lower = higher priority)
showToc: true       # Show table of contents
tocOpen: false     # TOC expanded by default
showBreadcrumbs: true

# Featured Image
cover:
  image: /images/first-blog-post.jpg
  alt: Alt text for accessibility
  caption: Image caption
  relative: false   # If true, image path is relative to page bundle

# Custom Parameters
# author: Nan Zhang
showReadingTime: true
showWordCount: true


# PaperMod Specific
ShowReadingTime: true
ShowShareButtons: true
ShowPostNavLinks: true
ShowCodeCopyButtons: true
searchHidden: false    # Hide from search
hideSummary: false     # Hide summary in list
hideFooter: false      # Hide post footer
---


## Basic Text Formatting

This is a paragraph with **bold text**, *italic text*, and ***bold italic text***. You can also use __underscores__ for _italics_ and ___bold italics___.

You can also add ~~strikethrough~~ text.

## Links and References

### External Links
- [Hugo Documentation](https://gohugo.io/)
- [Markdown Guide](https://www.markdownguide.org/)

### Internal Links
- [About Us](/about)
- [Contact](/contact)

## Lists

### Unordered Lists
- First item
  - Sub-item 1
  - Sub-item 2
- Second item
- Third item

### Ordered Lists
1. First step
   1. Sub-step A
   2. Sub-step B
2. Second step
3. Third step

### Task Lists
- [x] Write the about page
- [x] Create first blog post
- [ ] Add images
- [ ] Deploy website

## Code Blocks
### Inline Code
Use `hugo new` to create new content.

### Fenced Code Blocks
```python
def hello_hugo():
    print("Hello, Hugo!")
    return True
```

```javascript
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
```
## Blockquotes

> This is a blockquote.

> This is a nested blockquote.
> > This is a double nested blockquote.

## Tables

| Feature | Description | status |
|---------|-------------|--------|
| Markdown | Lightweight markup language | ✅ Done |
| Hugo | Static site generator | 🕛 In progress |
| Netlify | Hosting platform | To do |

## Images

![Hugo Logo](/images/hugo-logo-wide.svg)
![screenshot](/images/image.png)
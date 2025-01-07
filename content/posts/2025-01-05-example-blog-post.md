---
title: "Example Blog Post" # Title of the blog post
date: 2025-01-02 # YYYY-MM-DD
draft: false #true if you don't want to publish the post, false if you do
author: "Nan Zhang" # Author's name
description: "My first blog post with the aim to test markdown syntax" # Short description of the post
# tags: ["diged", "accessibility"] # Tags are used to classify posts by topic
categories: ["uncategorised"] # Categories are broader classifications
cover: # Cover image for the post
  image: "/images/hugo-logo-wide.svg" # Image file path
  alt: "Alt text" # Alt text for the image
  caption: "Caption text" # Caption for the image
showtoc: true # Enable Table of Contents for the post

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

![Hugo Logo](/images/first-blog-post.jpg)

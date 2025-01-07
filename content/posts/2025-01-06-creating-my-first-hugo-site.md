---
title: "Creating My First Hugo Site" # Title of the blog post
date: 2025-01-06 # YYYY-MM-DD
draft: false #true if you don't want to publish the post, false if you do
author: Nan Zhang # Author's name
description: "Some description" # Short description of the post
tags: ["diged", "accessibility"] # Tags are used to classify posts by topic
categories: ["Digital Education"] # Categories are broader classifications
showtoc: true # Enable Table of Contents for the post
---


## Introduction

This is a guide to create a blog site using Hugo and Github Pages. Hugo is a static site generator written in Go. It is very fast and easy to use. Github Pages is a static site hosting service provided by Github. It is free and easy to use. You can use your own domain name with Github Pages.

## Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/)
- [Git](https://git-scm.com/downloads)
- Github account
- homebrew (for macOS)

The theme I am using is [ananke](https://github.com/theNewDynamic/gohugo-theme-ananke)

I am also using [VS Code](https://code.visualstudio.com/) as my code editor.

## Tutorials
The tutorials I am following are:

- [Hugo Quick Start](https://gohugo.io/getting-started/quick-start/)
- [Host on Github](https://gohugo.io/hosting-and-deployment/hosting-on-github/)
- [Creating a Free Blog or Static Content Website with Hugo and GitHub Pages with Custom Domain and Ads](https://www.youtube.com/watch?v=LSJ5S8VG5aU&ab_channel=MissCoding)

While I am typing the process, I have GitHub Copilot running in the background. It is a very interesting experience. I am simply following the prompts and see what it generates. I am not sure if I will use the generated code, but it is a good way to learn.

This is also based on macOS. If you are using other operating systems, please refer to the official documentations.

## Initial setup process

### install Hugo

```bash
brew install hugo
```

### Create a new site

Create the directory structure for my project in the `my-hugo-site` directory.

```bash
hugo new site my-hugo-site
```

### Initialize git repository

```bash
cd my-hugo-site
git init
```

### Add a theme

Clone the Ananke theme into the themes directory, adding it to my project as a Git submodule.

```bash
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke
```

The theme I am using is [ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) which is a very simple theme. I don't know much Hugo themes, so I am using this one for now. Once I get more familiar with Hugo, I will try other themes. 

### Add theme to config.toml

```bash
echo 'theme = "ananke"' >> config.toml
```

### run Hugo server

```bash
hugo server -D
```
View your site at the URL displayed in your terminal. Press `Ctrl + C` to stop Hugo’s development server.

### Create a new post

Creating my first post.

```bash
hugo new posts/my-first-post.md
```

## Setup Github Repository

### Create a new repository

create a new repo in Github. I am naming it `my-hugo-site`.

run the following commands

```bash
git commit -m "my first commit"
git branch -M main
git remote add origin git@github.com:dandange8005/my-hugo-site.git
git push -u origin main
```

### Adding new files to git

```bash
git add .
git commit -m "my second commit"
git push -u origin main
```

### Adding .gitignore file

Go to [gitignore.io](https://www.toptal.com/developers/gitignore) and create a `.gitignore` file for Hugo.

## Deploy to Github Pages

How to deploy to Github Pages is documented in [Host on Github](https://gohugo.io/hosting-and-deployment/hosting-on-github/).

I am using Github actions to deploy to github pages.

### Custom domain

How to apply custom domain is documented in [Custom Domains](https://gohugo.io/hosting-and-deployment/hosting-on-github/#custom-domains).

## Working with Hugo themes

- [ ] How to change to a new theme
- [ ] Choosing a theme
- [ ] applying a theme
- [ ] making changes to a theme
- [ ] working with the theme's config.toml

### Changing to a new theme

```bash
git submodule deinit themes/ananke
git rm themes/ananke
git submodule add
```

### Choosing a theme

Themes I am considering:

- https://github.com/jpanther/congo


---

## What else can I do?

- [ ] Changing to a new theme
- [ ] Adding a menu
- [ ] Adding a page
- [ ] Adding tags to my posts
- [ ] Learn Hugo shortcodes to insert multimedia content

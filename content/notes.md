---
title: "Notes"
draft: true
description: "My notes on building the site"
---

## 2025-01-26

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

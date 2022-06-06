---
title: Book Reviews
layout: page
permalink: /books/
taxonomy: books
---

<div id="full-tags-list">
    {%- for post in site.tags.book-review -%}
    <div class="post-list">
        {%- for post in site.tags[tag] -%}
        <article class="post-preview">
                   .
                   .
                   .
        </article>
        {%- endfor -%}
    </div>
    {%- endfor -%}
</div>
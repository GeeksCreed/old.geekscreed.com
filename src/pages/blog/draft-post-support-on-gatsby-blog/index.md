---
title: How to add Draft posts Support to Gatsby blog
tags: ['gatsby', 'web-dev', 'graphql']
author: sasivarnan
date: 2018-12-16
featuredImage: ./drafts.jpg
---

Ever encountered a situation where you need to skip some unfinished, unpolished posts while deploying your Gatsby blog?

[Gatsby](/tag/gatsby) is awesome 💟.

Using modern web technologies, it takes care of a lot of optimizations out of the box.

Unlike traditional CMS like `WordPress` which gives a lot of features out of the box, in Gatsby, we need to hand pick the features that we need for our blog and build it by ourselves. It's not bad. It's cool 😎.

> With great power comes great responsibility.

As we have the complete control over adding features to Gatsby, there are lots of ways to achieve a single feature.

In this article, I am gonna walk us through a simpler way to add support for draft posts to your Gatsby blog.

Let's enhance our blog powered by `markdown` files to skip all the posts which are marked as `draft` in it's `frontmatter` while building the site.

First of all, pick your first published post and add `draft: false`. This will make gatsby to create the `graphQL` schema for `markdownRemark` with `draft` field in it, which is needed in while querying.

Add the following filter in every page where you are querying `allMarkdownRemark`.

```diff
    ...
    allMarkdownRemark(
-      sort: { fields: [frontmatter___date], order: DESC }
+      sort: { fields: [frontmatter___date], order: DESC },
+      filter: {frontmatter: {draft: {ne: true}}}
    ) {
    ...
```

Next, add the following change in the graphql query of `createPages` method in `gatsby-node.js`. It will create the `draft` posts during `development` phase but skips during the `production` phase.

```diff
...
resolve(
  graphql(
    `{
-      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
+      allMarkdownRemark(
+       sort: {fields: [frontmatter___date], order: DESC},
+         ${
+           process.env.NODE_ENV === 'production' ?
+           'filter: {frontmatter: {draft: {ne: true}}}' :
+           ''
+         }
+         limit: 1000
+      ) {
       edges {
        ...
```

Now in `gatsby-config.js` file, make the following change to skip draft posts while generating the RSS feed.

```diff
...
-  `gatsby-plugin-feed`,
+  {
+     resolve: `gatsby-plugin-feed`,
+     options: {
+       feeds: [
+         {
+           query: `
+           {
+             allMarkdownRemark(
+               limit: 1000,
+               sort: {order: DESC, fields: [frontmatter___date]},
+               filter: {frontmatter: {draft: {ne: true}}}
+             ) {
+               edges {
+                 node {
+                   excerpt
+                   html
+                   fields {
+                     slug
+                   }
+                   frontmatter {
+                     title
+                     date
+                   }
+                 }
+               }
+             }
+           }
+           `,
+           output: `rss.xml`
+         },
+       ]
+     }
+ },
...
```

That's it. Now your blog has support for draft posts. Any post which is marked as `draft: true` in its front matter will be skipped during the build time and available during the development time.

I haven't covered every case. But this is applicable to most of the cases.

Once check the list of plugins you use in your `gatsby-config.js` file. You might be using some other plugins like [gatsby-plugin-feed-generator](https://www.gatsbyjs.org/packages/gatsby-plugin-feed-generator/). You would need to configure it's graphql query accordingly.

Hope I have helped you in adding drafts feature to your Gatsby blog with a minimal effort.

Did this post help you to achieve it or found it complicated?

Feel free to share your thoughts in the comments section.

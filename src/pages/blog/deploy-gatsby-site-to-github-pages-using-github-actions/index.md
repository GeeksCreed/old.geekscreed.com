---
title: Deploy Gatsby Site to GitHub Pages using GitHub Actions
date: 2019-12-03
tags: ['gatsby', 'web-dev', 'github']
author: sasivarnan
featuredImage: ./ship-it.jpg
draft: false
---

We are seeing an increase in the popularity of [JAMStack](https://jamstack.org/). [Gatsby](https://www.gatsbyjs.org/) is one of the popular JAMStack frameworks.

There are a lot of tools and services available to host a static site build by Gatsby. [GitHub Pages](https://pages.github.com/), a free static site hosting service by GitHub, is one of them.

In this article, we will see how to build and deploy your existing Gatsby site using [GitHub Actions](https://github.com/features/actions) on every push to GitHub repo where your site is stored.

- In your `package.json` file, add a build script pointing to `gatsby build` (Most starters will already have it).

  ```json
  {
    "scripts": {
      "build": "gatsby build"
    }
  }
  ```

- Create a GitHub access token by following the steps over [here](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). Please note that the token must be generated with repo permissions.

- Open your GitHub repo settings, and go to the `Secrets` section. Click on `Add a new secret`. Fill `ACCESS_TOKEN` in the `Name` field and fill your generated access token from the previous step in the `Value` field. Click on the `Add secret` button.

![GitHub Add a new secret form](./GitHub-Add_a_new_secret_form.png 'GitHub Add a new secret form')

- Now, create a yml file in following path `.github/workflows/deploy-on-push.yml` and paste the following contents to it.

  ```yml
  name: Gatsby Build and Deploy to GitHub Pages on Push

  on:
    push:
      branches:
        - master

  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@master

        - name: Build and Deploy
          uses: JamesIves/github-pages-deploy-action@master
          env:
            ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
            BRANCH: gh-pages
            FOLDER: public
            BUILD_SCRIPT: yarn && yarn run build
  ```

- Commit your changes and push them to your GitHub repo.

This GitHub action will trigger if any push happened to master, spawns a ubuntu instance and check out the repo. Then it will do `yarn` and `yarn build`, which will generate the output to `public` directory. The contents of the public folder will be deployed to `gh-pages` branch.

Now on every push to your repo will build your site and deploy it to GitHub pages.

I hope this helped you to set up the deployment of Gatsby site to GitHub Pages using GitHub actions. Feel free to ask anything around this in the comments section below.

---
title: Why you should use create-react-app to Scaffold your Next React App?
date: 2018-12-12
tags: ['react', 'web-dev', 'webpack']
author: sasivarnan
featuredImage: ./react-code-macbook.jpg
---

Hello folks. 

In this article, I am gonna share why we should stop building custom webpack config and instead use [create-react-app](https://facebook.github.io/create-react-app/) to scaffold our react application. 

React is great. Out of the box, it is just a view library. The ecosystem around React is really great and it's huge. 

We have to basically pick the react compatible parts like router, state management library for building our application. This is a really tiring task. 

Setting up a modern react app from scratch is not easy and it makes us lost in the process due to a lot of overwhelming choices. 

React is evolving really fast. And so the tooling around it.

If you are trying to set up everything from scratch, you need to hassle with lot more things like `webpack`, `babel` which is a different world altogether.

> The `create-react-app` helps in avoiding those hassles and enables us to focus on the application rather than the configuration.

Even though `create-react-app` was available to developers since 2016, I have seen many people still searching for boilerplate and trying to set up the project from scratch even in 2018. This motivated me to write about this topic.

Over the period of 2 years, the [create-react-app](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md) has matured a lot and provides a lot of cool features out of the box and drop in support for some features.

Scaffolding a React project with `create-react-app` is super easy. No global installations of CLIs needed. If you use the recent versions on `node` and `npm`, then run

```bash
 npm init react-app <app-name>
```

If you are on the `yarn` team, then run

```bash
 yarn create react-app <app-name>
```

This will create a folder, with the project structure that is specified in [documentation](https://facebook.github.io/create-react-app/docs/folder-structure). It has some built-in scripts to develop with ease using features like auto reload, linting, error messages and building minified production ready bundle.

Before looking into the pros and cons of using `create-react-app`, let's see some of the features that are provided along with it, which can work without any configuration. I will give a small subset of features and the links for the docs.

### Features

* Support for most of latest JavaScript standards and JSX using pre-configured [babel](https://github.com/facebook/create-react-app/tree/master/packages/babel-preset-react-app) configuration. 
* Drop-in support for [prettier](https://prettier.io/) which can be configured to run on staged files before git commit. Learn more about it on the [docs](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#formatting-code-automatically).
* Out of the box support for [CSS Modules](https://github.com/css-modules/css-modules). All you need to do is create the CSS file with extension `<file-name>.module.css` and it will pick that file as a CSS Module. Learn more about it on the [docs](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet).
* Lot of the developers use [SASS](https://sass-lang.com/). There is a drop in support for SASS as well. Just install `node-sass` to your project and you are good to go. All the files with `.sass` extension will be taken by the SASS preprocessor. Learn more about it on the [docs](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet).
* The CSS files in the bundle will be minified and vendor prefixed using [autoprefixer](https://github.com/postcss/autoprefixer). Based on your target audience, you can enable polyfills for new CSS features using `browserslist` property in `package.json`. Learn more about it on the [docs](https://facebook.github.io/create-react-app/docs/post-processing-css).
* Support for code splitting via [dynamic `import()`](https://github.com/tc39/proposal-dynamic-import). This works great with [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy) and `Suspense`.
* Drop-in support for static type checkers like [Flow](https://facebook.github.io/create-react-app/docs/adding-flow) and [TypeScript](https://facebook.github.io/create-react-app/docs/adding-typescript).
* Support for custom environment variables using `.env` files. Learn more about it on the [docs](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables).
* Opt-in support for PWAs. You will get `manifest.json` and Service Worker files out of the box. You just need to customize `manifest.json` according to your needs and enable service worker. Learn more about it on the [docs](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).
* Provides support for testing using [Jest](https://jestjs.io/). Learn more about it on the [docs](https://facebook.github.io/create-react-app/docs/running-tests).


As you see, `create-react-app` provides a lot of great features to build. In addition to that, there are a lot of advantages and some disadvantages of using `create-react-app` to scaffold your application.

### Pros

* You don't need to break yourself in configuration. You can just focus yourself on building the app.
* Saves a lot of time and energy as it provides a lot of common things out of the box.
* Training a newcomer about your project is easy. You just need to train them about the project and point them to the `create-react-app` [documentation](https://facebook.github.io/create-react-app/) for setup and configuration.
* As it is maintained by Facebook, support for new features of React will be available immediately.
* Updating to a new version is super easy. Just replace the version of `react-scripts` in `package.json` and run `npm install`. That's it. 
* Speaking of updating, as `create-react-app` takes care of handling under the hood things, updating things like `webpack` and `babel` will be taken care by them. We don't need to hassle with it again.

### Cons

* It provides an opinionated option for building a react app. Not everyone will like that.
* It helps only if you are starting a project from scratch. It won't help on the case of your existing application where you need to partially migrate to react.

The choices provided by create-react-app is not enough? You can easily opt-out by running

```bash
  npm run eject
```

This will copy all the configuration files like `webpack`, `eslint` into your project and gives you choice to customize it.

As you see, using `create-react-app` provides you with a lot of advantages over building custom webpack config.

Hope I have given an overview of the features of `create-react-app` and convinced you to choose it for your next React project.

Starting a new React project? Which path are you gonna choose? 

With `create-react-app` or custom config from scratch?

Are you using `create-react-app` on your existing app? Are you facing any issue with it?

Feel free to share your opinion on comments. 
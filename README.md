
# Gatsby Theme Starter

For a more stable boilerplate, see
[ChristopherBiscardi/gatsby-starter-theme][]

**WIP/EXPERIMENTAL**

Boilerplate for developing Gatsby themes.
By itself, this theme does nothing. This repo is meant to serve as a starting point for developing custom themes.
This setup does not require the use of Yarn workspaces for development.
If you plan on developing multiple themes that work together, you should consider setting up a monorepo using Lerna or Yarn workspaces

**NOTE** This setup will *not* work with component shadowing locally.
Use [ChristopherBiscardi/gatsby-starter-theme][] for a complete yarn workspaces setup.

## Getting Started

1. Clone this repo
2. Remove git history with `rm -rf .git`
3. Change the theme's name in:
  - `package.json`
  - `gatsby-config.js`
  - `demo/package.json`
  - `demo/gatsby-config.js`
4. Edit the source code to create a theme

## Running the demo

```sh
cd demo
npm install
npm start
```

MIT License

[ChristopherBiscardi/gatsby-starter-theme]: https://github.com/ChristopherBiscardi/gatsby-starter-theme

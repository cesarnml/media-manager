# Media Manager

An application to automate downloading media

- [Media Manager](#media-manager)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Services](#services)
  - [DevOps](#devops)
  - [Notes](#notes)
    - [Frontend Boilerplate](#frontend-boilerplate)
      - [Webpack Getting Started](#webpack-getting-started)
      - [Webpack Asset Mangement](#webpack-asset-mangement)

## Frontend

- React
- ReduxToolkit
- CSSModules
- SASS
- TailwindCSS

## Backend

- Django
- DRF
- python-qbittorrent
- gdriveTorrent

## Services

- [EZTV API](https://eztv.io/api/)
- [YTS.MX API](https://yts.mx/api)
- [fanart.tv API](https://fanarttv.docs.apiary.io/#)
- [OMDb API](http://www.omdbapi.com/)

## DevOps

## Notes

### Frontend Boilerplate

#### Webpack Getting Started

1. Install webpack and webpack-cli

   - `npm i webpack webpack-cli`

2. Install eslint locally

   - `npm i -D eslint`
   - configure eslint with `eslint --init`

3. Change `package.json` to:

   - add `"private": true`
   - delete `"main": "index.js"`

4. Add `/dist` directory and move `index.html` inside it

5. Install lodash

   - `npm i lodash`

6. Create initial bundled `main.js`

   - `npx webpack`

7. Run bundler with a specified config file

   - `npx webpack --config webpack.config.js`

8. Add npm script to `package.json` to launch bundler

   - `"build": "webpack"`

#### Webpack Asset Mangement

1. Install `style-loader` and `css-loader`

   - `npm i -D style-loader css-loader`

2. Install `file-loader`

   - `npm i -D file-loader`

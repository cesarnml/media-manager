# Media Manager

An application to automate downloading media

- [Media Manager](#media-manager)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Services](#services)
  - [DevOps](#devops)
  - [Notes](#notes)
    - [Frontend Boilerplate](#frontend-boilerplate)
      - [webpack - Getting Started](#webpack---getting-started)
      - [webpack - Asset Mangement](#webpack---asset-mangement)
      - [webpack - Output Management](#webpack---output-management)

## Frontend

- React
- ReduxToolkit
- TypeScript
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

- webpack

## Notes

### Frontend Boilerplate

#### webpack - Getting Started

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

#### webpack - Asset Mangement

1. Install `style-loader` and `css-loader`

   - `npm i -D style-loader css-loader`

2. Install `file-loader` for images and fonts

   - `npm i -D file-loader`

3. Install `csv-loader` for csv files

   - `npm i -D csv-loader`

#### webpack - Output Management

1. Adjust `file-loader` config to deliver processed resources inside of assets folder

   - `{ test: /\.(png|svg|jpg|gif)$/i, loader: 'file-loader', options: { name: 'assets/images/[name].[ext]' } },`
   - `{ test: /\.(woff|woff2|eot|ttf|otf)$/, use: { loader: 'file-loader', options: { name: 'assets/fonts/[name].[ext]' } }, },`

2. Adjust `entry` point config to allow for bundle splittting

   ```javascript
     entry: {
    app: './src/index.js',
    print: './src/print.js',
   },
   output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
   },
   ```

3. Install `HtmlWebpackPlugin` (autogenerates `index.html` and links to bundled resources)

   - `npm i -D html-webpack-plugin`

4. Keep `/dist` clean with `clean-webpack-plugin`

   - `npm i -D clean-webpack-plugin`

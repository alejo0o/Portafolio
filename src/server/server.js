/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import webpack from 'webpack';
import { Helmet } from 'react-helmet';
//React Imports
import React from 'react';
import dotenv from 'dotenv';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
//import helmet from 'helmet';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serverRoutes from '../frontend/components/serverRoutes';
import getManifest from './getManifest';

dotenv.config();
const app = express();
const { ENV } = process.env || 'production';
const PORT = process.env.PORT || 3000;

if (ENV === 'development') {
  console.log('development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log('production config');
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  //inabilite el helmet ya que da problemas con las imagenes y sus urls
  /*app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');*/
}

const setResponse = (html, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'css/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'js/app.js';
  const vendorBuild = manifest ? manifest['vendor.js'] : 'vendor/vendor.js';
  const helmet = Helmet.renderStatic();
  return `
    <!DOCTYPE html>
              <html ${helmet.htmlAttributes.toString()}>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="${mainStyles}" type="text/css">
                    ${helmet.title.toString()}
                    ${helmet.link.toString()}
                </head>
                <body ${helmet.bodyAttributes.toString()}>
                    <div id="app">${html}</div>
                    <script src="${mainBuild}" type="text/javascript"></script>
                    <script src="${vendorBuild}" type="text/javascript"></script>
                </body>
              </html>
    `;
};

const renderApp = (req, res) => {
  const sheet = new ServerStyleSheet();
  let html = '';
  try {
    html = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <StyleSheetManager sheet={sheet.instance}>
          {renderRoutes(serverRoutes)}
        </StyleSheetManager>
      </StaticRouter>
    );
  } catch (error) {
  } finally {
    sheet.seal();
  }
  res.send(setResponse(html, req.hashManifest));
};

app.get('*', renderApp);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// UWAGA:
// Meta tagi w tym pliku są globalne (techniczne dla całej aplikacji).
// Meta tagi SEO, tytuł, canonical, og, twitter generuj wyłącznie przez Helmet w React.

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import App from './src/App';

const app = express();
app.use(express.static('dist/public'));

app.get('*', (req, res) => {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;

  res.send(`
    <!DOCTYPE html>
    <html lang="pl">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
    
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="/favicon.ico">

        <link rel="stylesheet" href="slick-carousel/slick/slick.css">
        <link rel="stylesheet" href="slick-carousel/slick/slick-theme.css">
        <style>body { background: #fff; margin: 0; font-family: Roboto, Arial, sans-serif; }</style>
        <script defer="defer" src="/bundle.js"></script>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';

const app = express();
app.use(express.static('dist/public'));

app.get('*', (req, res) => {
  const html = renderToString(<App url={req.url} />);
  res.send(`
    <!DOCTYPE html>
    <html lang="pl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR Material UI App</title>
  <link rel="stylesheet" type="text/css" href="/slick-carousel/slick/slick.css" />
  <link rel="stylesheet" type="text/css" href="/slick-carousel/slick/slick-theme.css" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body style="background:#fff; margin:0; font-family:Roboto,Arial,sans-serif;">
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes'
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{ renderRoutes(Routes) }</div>
      </StaticRouter>
    </Provider>
  );

  return `
      <html>
          <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
            <script>
              window.INITIAL_STATE = ${serialize(store.getState())};
            </script>
          </head>
          <body>
              <div id="root">${content}</div>
              <script src="bundle.js"></script>
          </body>
      </html>
  `;
};
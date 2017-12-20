import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import renderer from './helpers/renderer';
import createStore from "./helpers/createStore";
import Routes from './client/Routes';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
const app = express();

app.use(express.static('public'));

app.use('/api', 
    proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        }
    })
);

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        const status = context.notFoundPage ? 404 : 200;

        res.status(status).send(content);
    });

});

app.listen(3000, () => {
    console.log('Runnin on port 3000!');
});
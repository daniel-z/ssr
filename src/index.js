import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/home';
import renderer from './helpers/renderer';
import createStore from "./helpers/createStore";
import Routes from './client/Routes';
import { matchRoutes } from 'react-router-config';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });

});

app.listen(3000, () => {
    console.log('Runnin on port 3000!');
});
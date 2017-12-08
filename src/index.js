import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/home';
import renderer from './helpers/renderer';
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    // some logic to initialize the store
    // and load data into the store

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('Runnin on port 3000!');
});
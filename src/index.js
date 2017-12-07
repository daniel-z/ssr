import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/home';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log('Runnin on port 3000!');
});
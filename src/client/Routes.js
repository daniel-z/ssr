import React from 'react';
import HomePage from './components/pages/HomePage'
import UsersPage from './components/pages/UsersPage';
import NotFoundPage from './components/pages/NotFoundPage';
import App from './app';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      }
    ]
  }
];

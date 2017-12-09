import React from 'react';
import HomePage from './components/pages/HomePage'
import UsersPage from './components/pages/UsersPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersPage,
    path: '/users',
  }
];

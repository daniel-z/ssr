import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
};

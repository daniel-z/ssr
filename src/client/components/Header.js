import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
};

function mapStateToProps({ auth }) {
  return { auth };
};

export default connect(mapStateToProps)(Header);
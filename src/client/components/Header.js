import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log(auth);
  const authButton = auth ? (
    <a href="/api/logout"> Logout </a>
  ): (
    <a href="/api/auth/google"> Login </a>
  );
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link to="/">Home</Link>
        <div>
          <Link to="/users">Users</Link>
          <Link to="/admin">Admins</Link>
          { authButton }
        </div>
      </nav>
    </div>
  )
};

function mapStateToProps({ auth }) {
  return { auth };
};

export default connect(mapStateToProps)(Header);
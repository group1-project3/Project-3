import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

class LoggedOut extends Component {
  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  };

  render() {
    return (
      <nav
        className="navbar navbar-dark bg-primary"
        style={{ position: 'fixed', zIndex: 100, width: '100%' }}
      >
        <Link className="navbar-brand" to="/">
          NYT Article Search
        </Link>
      </nav>
    );
  }
}

export default LoggedOut;
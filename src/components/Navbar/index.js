import React, { Component } from 'react';
import './style.scss';

class Navbar extends Component {
    render() {
      const { location } = this.props;
      const homepage = location.pathname.match(/^\//) ? 'active' : '';
      const newUser = location.pathname.match(/^\/newUser/) ? 'active' : ''; 
      const login = location.pathname.match(/^\/login/) ? 'active' : ''; 
      const about = location.pathname.match(/^\/about/) ? 'active' : ''; 
        return(
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top py-2">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <h3 className="d-inline align-middle header">Online<span className="text-dark">DWork</span></h3>
                </a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li className={`nav-item ${homepage}`}>
                        <a href="/" className="nav-link">HOME</a>
                      </li>
                      <li className={`nav-item ${newUser}`}>
                        <a href="/newUser" className="nav-link">SIGNUP</a>
                      </li>
                      <li className={`nav-item ${login}`}>
                        <a href="/login" className="nav-link">LOGIN</a>
                      </li>
                      <li className={`nav-item ${about}`}>
                        <a href="#contact" className="nav-link">ABOUT US</a>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navbar;
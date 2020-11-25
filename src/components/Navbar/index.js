import React, { Component } from 'react';
import './style.scss';

class Navbar extends Component {
    render() {
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
                      <li className="nav-item text-white">
                        <a href="/" className="nav-link">HOME</a>
                      </li>
                      <li className="nav-item">
                        <a href="#skills" className="nav-link">SIGNUP</a>
                      </li>
                      <li className="nav-item">
                        <a href="#projects" className="nav-link">LOGIN</a>
                      </li>
                      <li className="nav-item">
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
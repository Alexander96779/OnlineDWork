/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
      const { location } = this.props;
      const dashboard = location.pathname.match(/^\/home/) ? 'active' : '';
      const jobs = location.pathname.match(/^\/myJobs/) ? 'active' : ''; 
      const maps = location.pathname.match(/^\/location/) ? 'active' : ''; 
      const notifications = location.pathname.match(/^\/notifications/) ? 'active' : '';
      const userProfiles = location.pathname.match(/^\/userProfiles/) ? 'active' : '';
       
        return(
    <div>
      <div className="sidebar" data-color="blue">
      <div className="logo">
      <a href="/home" className="navbar-brand">
        <h5 className="d-inline align-middle header">Online<span className="text-dark">DWork</span></h5>
      </a>
      </div>
      <div className="sidebar-wrapper" id="sidebar-wrapper">
        <ul className="nav">
          <li className={`${dashboard}`}>
            <a href="/home">
              <i className="now-ui-icons design_app"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className={`${jobs}`}>
            <a href="/myJobs">
              <i className="now-ui-icons files_paper"></i>
              <p>My Jobs</p>
            </a>
          </li>
          <li className={`${maps}`}>
            <a href="/location">
              <i className="now-ui-icons location_pin"></i>
              <p>Location</p>
            </a>
          </li>
          <li className={`${notifications}`}>
            <a href="/notifications">
              <i className="now-ui-icons ui-1_bell-53"></i>
              <p>Notifications</p>
            </a>
          </li>
          <li className={`${userProfiles}`}>
            <a href="/userProfiles">
              <i className="now-ui-icons users_circle-08"></i>
              <p>User Profile</p>
            </a>
          </li>
          <li className="active-pro">
            <a href="./upgrade.html">
              <i className="now-ui-icons media-1_button-power"></i>
              <p>Logout</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="main-panel" id="main-panel"></div>
      <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#pablo">
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="panel-header panel-header-lg">
      <h1 className="header text-center text-white">OnlineDWork
      </h1>
      </div>
    </div>
        );
    }
}

export default Sidebar;
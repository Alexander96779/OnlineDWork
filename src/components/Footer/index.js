import React, { Component } from 'react';
import './style.scss';

class Footer extends Component {
    render() {
        return(
    <footer id="main-footer" className="py-2 bg-primary text-white">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-6 mx-auto">
                  <p className="lead text-white">Copyright &copy; OnlineDWork 2020</p>
                </div>
              </div>
            </div>
    </footer> 
        )
    }
}

export default Footer;
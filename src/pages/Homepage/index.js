import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import person1 from '../../assets/images/person1.jpg';
import './style.scss';

class Homepage extends Component {
    render(){
        return(
    <div>
        <Navbar { ...this.props } />
        <section id="landingPage" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 py-2">
                        <div className="card bg-light">
                            <div className="card-body">
                                <img src={person1} alt="user-profile"  className="img-fluid rounded-circle w-100 mb-3" />
                                <h3>Grace Byers</h3>
                                <h5 className="text-muted">Babysitter</h5>
                                <h5 className="text-muted">Age: 20</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-2">
                        <div className="card bg-light">
                            <div className="card-body">
                                <img src={person1} alt="user-profile"  className="img-fluid rounded-circle w-100 mb-3" />
                                <h3>Grace Byers</h3>
                                <h5 className="text-muted">Babysitter</h5>
                                <h5 className="text-muted">Age: 20</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-2">
                        <div className="card bg-light">
                            <div className="card-body">
                                <img src={person1} alt="user-profile"  className="img-fluid rounded-circle w-100 mb-3" />
                                <h3>Grace Byers</h3>
                                <h5 className="text-muted">Babysitter</h5>
                                <h5 className="text-muted">Age: 20</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-2">
                        <div className="card bg-light">
                            <div className="card-body">
                                <img src={person1} alt="user-profile"  className="img-fluid rounded-circle w-100 mb-3" />
                                <h3>Grace Byers</h3>
                                <h5 className="text-muted">Babysitter</h5>
                                <h5 className="text-muted">Age: 20</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-2">
                        <div className="card bg-light">
                            <div className="card-body">
                                <img src={person1} alt="user-profile"  className="img-fluid rounded-circle w-100 mb-3" />
                                <h3>Grace Byers</h3>
                                <h5 className="text-muted">Babysitter</h5>
                                <h5 className="text-muted">Age: 20</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-2">
                        <div className="card bg-light">
                            <div className="card-body">
                                <img src={person1} alt="user-profile"  className="img-fluid rounded-circle w-100 mb-3" />
                                <h3>Grace Byers</h3>
                                <h5 className="text-muted">Babysitter</h5>
                                <h5 className="text-muted">Age: 20</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-2">
                        <div className="card bg-light">
                            <div className="card-body">
                                <img src={person1} alt="user-profile"  className="img-fluid rounded-circle w-100 mb-3" />
                                <h3>Grace Byers</h3>
                                <h5 className="text-muted">Babysitter</h5>
                                <h5 className="text-muted">Age: 20</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
        );
    }
}

export default Homepage;
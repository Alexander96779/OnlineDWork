import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import userIcon from '../../assets/icons/login-icon.png';
import { login } from '../../store/modules/Login/actions';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }

      handleSubmit(e){
        e.preventDefault();
        const { email, password } = this.state; 
        const { onLogin } = this.props;
       onLogin(
            email,
            password
        );
      }

render() {
        const { email, password } = this.state;
        const { authenticated } = this.props;

return (
<div>
        <Navbar { ...this.props } />
    <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card bg-light mt-5">
                        <img alt="user-icon" src={userIcon} className="avatar rounded-circle py-0 pl-5 pr-5" />
                        <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user-circle"></i></span>
                                </div>
                                <input 
                                type="text" 
                                name="email" 
                                className="form-control" 
                                placeholder="Email"
                                value={email}
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-key"></i></span>
                                </div>
                                <input 
                                type="password" 
                                name="password" 
                                className="form-control" 
                                placeholder="Password"
                                value={password}
                                onChange={this.handleChange}
                                />
                            </div>
                <div className="my-1 py-1 ml-5">
                    <a href="/forgotPassword" className="text-decoration-none">Forgot Password?</a>
                </div>
                            {
                                authenticated.isLoggingIn ?
                                <input 
                                    type="submit" 
                                    className="btn btn-primary btn-block" 
                                    value="Loging In..." 
                                />
                                :
                                <input 
                                type="submit" 
                                className="btn btn-primary btn-block" 
                                value="Login" 
                            />
                            }
                        </form>
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


const mapStateToProps = (state) => ({
    authenticated: state.loginUser,
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Login);
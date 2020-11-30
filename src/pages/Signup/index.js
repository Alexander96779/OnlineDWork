/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import cogoToast from 'cogo-toast';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { signup } from '../../store/modules/Signup/actions';

class Signup extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleImg = this.handleImg.bind(this);
        this.checkFirstnameInput = this.checkFirstnameInput.bind(this);
        this.checkLastnameInput = this.checkLastnameInput.bind(this);
        this.checkEmailInput =  this.checkEmailInput.bind(this);
        this.checkPasswordInput = this.checkPasswordInput.bind(this);
        this.checkPhoneNumberInput = this.checkPhoneNumberInput.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phonenumber: '',
            profilePic: null,
            dateOfBirth: '',
            gender: '',
            category: '',
            jobTitle: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: '',
            phoneNumberError: '',
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            passwordValid: false,
            phoneNumberValid: false
        };
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }

    async handleImg(event) {
      const profile = event.target.files[0];
      if (!profile.name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
        cogoToast.error("Please select valid image", { position: 'top-right' });
        return;
      }
          this.setState({ profilePic: profile });
    }

    handleSubmit(e) {
      e.preventDefault();
      const { firstname, lastname, email, password, phonenumber, profilePic,
      dateOfBirth, gender, category, jobTitle } = this.state;
      const { onSignup } = this.props;
      onSignup( firstname, lastname, email, password, phonenumber, profilePic, 
        dateOfBirth, gender, category, jobTitle);
    }

      resetInput(e) {
        if (e.target.id === 'email') {
          this.setState({ emailError: '', emailValid: false });
        }
        if (e.target.id === 'password') {
          this.setState({ passwordError: '', passwordValid: false });
        }
        if (e.target.id === 'firstname') {
          this.setState({ firstNameError: '', firstNameValid: false });
        }
        if (e.target.id === 'lastname') {
            this.setState({ lastNameError: '', lastNameValid: false })
        }
        if (e.target.id === 'phonenumber') {
            this.setState({ phoneNumberError: '', phoneNumberValid: false })
        }
      }

    checkEmailInput(e) {
        const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!validEmailRegex.test(e.target.value)) {
          this.setState({
            emailError: 'Email is invalid',
            emailValid: false,
          });
        } else {
          this.setState({
            emailError: '',
            emailValid: true,
          });
        }
      }
    
      checkPasswordInput(e) {
        const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,64}$/;
        if (!validPasswordRegex.test(e.target.value)) {
          this.setState({
            passwordError: 'Should be alphanumeric and between  8 to 64 characters',
            PasswordValid: false,
          });
        } else {
          this.setState({
            passwordError: '',
            PasswordValid: true,
          });
        }
      }
    
      checkFirstnameInput(e) {
        const validPasswordRegex = /^[a-zA-Z]{3,}/;
        if (!validPasswordRegex.test(e.target.value)) {
          this.setState({
            firstNameError: 'Should be alphabetic and atleast 3 characters',
            firstNameValid: false,
          });
        } else {
          this.setState({
            firstNameError: '',
            firstNameValid: true,
          });
        }
      }

      checkLastnameInput(e) {
        const validPasswordRegex = /^[a-zA-Z]{3,}/;
        if (!validPasswordRegex.test(e.target.value)) {
          this.setState({
            lastNameError: 'Should be alphabetic and atleast 3 characters',
            lastNameValid: false,
          });
        } else {
          this.setState({
            lastNameError: '',
            lastNameValid: true,
          });
        }
      }

      checkPhoneNumberInput(e) {
        const validPasswordRegex = /^\+?([0-9]{2})\)?([0-9]{10})$/;
        if (!validPasswordRegex.test(e.target.value)) {
          this.setState({
            phoneNumberError: 'Please provide valid phone number',
            phoneNumberValid: false,
          });
        } else {
          this.setState({
            phoneNumberError: '',
            phoneNumberValid: true,
          });
        }
      }
    render() {
        const { firstname, lastname, email, password, phonenumber, gender, dateOfBirth, category, jobTitle,
        firstNameError, lastNameError, emailError, passwordError, phoneNumberError } = this.state;
        const { userSignup } = this.props;
        return(
    <div>
        <Navbar { ...this.props } />
        <section id="signup" className="pt-5 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card bg-light mt-5">
                            <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                        <label for="firstname">First name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="firstname" 
                    name="firstname"
                    placeholder="First name" 
                    value={firstname} 
                    onChange={this.handleChange}
                    onKeyUp={this.checkFirstnameInput}
                    onFocus={this.resetInput}
                    />
                    <div className="text-danger small">{firstNameError}</div>
                            </div>
                            <div className="col-md-6 mb-3">
                        <label for="lastname">Last name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="lastname"
                    name="lastname" 
                    placeholder="Last name" 
                    value={lastname}
                    onChange={this.handleChange}
                    onKeyUp={this.checkLastnameInput}
                    onFocus={this.resetInput}
                    />
                    <div className="text-danger small">{lastNameError}</div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                        <label for="email">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    placeholder="Your email" 
                    value={email}
                    onChange={this.handleChange}
                    onKeyUp={this.checkEmailInput}
                    onFocus={this.resetInput}
                    />
                    <div className="text-danger small">{emailError}</div>
                            </div>
                            <div className="col-md-6 mb-3">
                        <label for="password">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password"
                    placeholder="Password" 
                    value={password}
                    onChange={this.handleChange}
                    onKeyUp={this.checkPasswordInput}
                    onFocus={this.resetInput}
                    />
                    <div className="text-danger small">{passwordError}</div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                        <label for="phonenumber">Phone number</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="phonenumber" 
                    name="phonenumber"
                    placeholder="+2507______" 
                    value={phonenumber}
                    onChange={this.handleChange}
                    onKeyUp={this.checkPhoneNumberInput}
                    onFocus={this.resetInput}
                    />
                    <div className="text-danger small">{phoneNumberError}</div>
                            </div>
                            <div className="col-md-6 mb-3">
                    <label for="profile">Profile picture</label>
                  <input 
                  type="file" 
                  className="form-control-file" 
                  id="profile" 
                  onChange={this.handleImg}
                  />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                        <label for="dateOfBirth">Date of birth</label>
                    <input 
                    type="date" 
                    className="form-control" 
                    id="dateOfBirth" 
                    name="dateOfBirth"
                    placeholder="Your date of birth" 
                    value={dateOfBirth}
                    onChange={this.handleChange}
                    />
                            </div>
                            <div className="col-md-6 mb-3">
                        <label for="gender">Gender</label>
                    <select className="custom-select" value={gender} name="gender" onChange={this.handleChange}>
                        <option value="" selected disabled>Select gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>    
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                        <label for="category">Category</label>
                    <select class="custom-select" value={category} name="category" onChange={this.handleChange}>
                        <option value="" selected disabled>Select category</option>
                        <option value="Employee">Employee</option>
                        <option value="Employer">Employer</option>
                    </select> 
                            </div>
                            <div className="col-md-6 mb-3">
                        <label for="jobTitle">Job title</label>
                    <select class="custom-select" value={jobTitle} name="jobTitle" onChange={this.handleChange}>
                        <option value="" selected disabled>Select your job</option>
                        <option value="Babysitter">Babysitter</option>
                        <option value="Cleaner">Cleaner</option>
                        <option value="Cook">Cook</option>
                        <option value="Guard">Guard</option>
                        <option value="Mower">Mower</option>
                    </select>    
                            </div>
                        </div>
                        { userSignup.isLoading ?
                    <input 
                        type="submit" 
                        className="btn btn-primary btn-block" 
                        value="Creating Account..." 
                    />
                    :
                    <input 
                        type="submit" 
                        className="btn btn-primary btn-block" 
                        value="Create Account" 
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
  userSignup: state.signupUser,
});

const mapDispatchToProps = (dispatch) =>({
  onSignup: ( firstname, lastname, email, password, 
    phonenumber, profilePic, dateOfBirth, gender, category,
    jobTitle ) => dispatch(signup( firstname, lastname, email, password, phonenumber,
       profilePic, dateOfBirth, gender, category, jobTitle)),
});

export default connect( mapStateToProps, mapDispatchToProps ) (Signup);
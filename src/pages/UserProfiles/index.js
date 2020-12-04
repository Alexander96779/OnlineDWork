import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';
import Sidebar from '../../components/Sidebar';
import './style.scss';
import { getAll } from '../../store/modules/viewUsers/actions';

class UserProfile extends Component {

    async componentDidMount(){
        await this.props.viewAll();
    }
    render() {
        const { displayUser } = this.props;
        console.log(displayUser);
        return(
    <div>
        <div className="main-panel" id="main-panel">
            <Sidebar { ...this.props }/>
        <div className="content">
            <div className="row" id="userProfile">
                <div className="col-md-12">
                    <div className="card ">
                        <div className="card-header ">
                        User Profile
                        </div>
                    <div className="card-body">
                    { 
                        displayUser.isLoading ?
                    <>
                    <Spinner animation="border" size="sm" />
                    <Spinner animation="border" />
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" />
                    </>
                      :  
                    <div className="row">
                        <div className="col-md-4">
    <img src={displayUser.user.profilePic} alt="user-profile"  className="img-fluid rounded-circle w-100 h-100 mb-3" />
                        </div>
                    <div className="col-md-8" id="formData">
                    <form>
                        <div className="row">
                        <div className="form-group col-md-6">
                            <label for="firstname">Firstname</label>
                <input type="text" readOnly className="form-control" id="firstname" value={displayUser.user.firstName} />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="lastname">Lastname</label>
                <input type="text" readOnly className="form-control" id="lastname" value={displayUser.user.lastName} />
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-group col-md-6">
                            <label for="email">Email</label>
                <input type="text" readOnly className="form-control" id="email" value="gbyers@gmail.com" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="gender">Gender</label>
                <input type="text" readOnly className="form-control" id="gender" value={displayUser.user.gender} />
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-group col-md-6">
                            <label for="phoneNumber">Phone Number</label>
                <input type="text" readOnly className="form-control" id="phoneNumber" value={displayUser.user.phoneNumber} />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="dateOfBirth">Date of birth</label>
                <input type="text" readOnly className="form-control" id="dateOfBirth" value={moment(displayUser.user.dateOfBirth).format('LL')} />
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-group col-md-6">
                            <label for="category">Category</label>
                <input type="text" readOnly className="form-control" id="category" value={displayUser.user.category} />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="jobTitle">Job Title</label>
                <input type="text" readOnly className="form-control" id="JobTitle" value={displayUser.user.jobTitle} />
                        </div>
                        </div>
                        <div className="form-group">
                            <label for="created">Joined on</label>
                <input type="text" readOnly className="form-control" id="created" value={moment(displayUser.user.created).calendar()} />
                        </div>
                        <a href="#update" className="btn btn-primary btn block">Update Profile</a>
                    </form>
                    </div>
                    
                    </div>
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
        );
    }
}

const mapStateToProps = (state) =>({
    displayUser: state.getUserData,
});

const mapDispatchToProps = (dispatch) =>({
    viewAll: () => dispatch(getAll()),
})

export default connect(mapStateToProps, mapDispatchToProps) (UserProfile);
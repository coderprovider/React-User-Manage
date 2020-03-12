import React from "react";
import "./UserDetails.scss"

const emptyUser = {
    address: {}
}
const UserDetails = ({user = emptyUser}) => {

    return (
        <form className="user-details-form">
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name" value={user.name}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
                           value={user.email}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
                           value={user.password}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                       value={user.address && user.address.street}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" value={ user.address && user.address.zipCode}/>
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" value={user.address && user.address.city}/>
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="inputCountry">Country</label>
                    <input type="text" className="form-control" id="inputCountry" value={user.address && user.address.country}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
};

export default UserDetails;

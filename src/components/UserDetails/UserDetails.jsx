import React from "react";
import "./UserDetails.scss"


const UserDetails = (props) => {

    const updateName = (e) => {
        props.onChange({...props.user, name: e.target.value})
    }

    const updateEmail = (e) => {
        props.onChange({...props.user, email: e.target.value})
    }

    const updatePassword = (e) => {
        props.onChange({...props.user, password: e.target.value})
    }

    const updateStreet = (e) => {
        props.onChange({...props.user, address: {...props.user.address, "street": e.target.value}})
    }

    const updateZipCode = (e) => {
        props.onChange({...props.user, address: {...props.user.address, "zipCode": e.target.value}})
    }

    const updateCity = (e) => {
        props.onChange({...props.user, address: {...props.user.address, "city": e.target.value}})
    }

    const updateCountry = (e) => {
        props.onChange({...props.user, address: {...props.user.address, "country": e.target.value}})
    }

    const saveUserDetails = (e) => {
        e.preventDefault()
        props.onSave(props.user)
    }
    return (
        <form className="user-details-form">
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name"
                           value={props.user.name || ''} onChange={updateName}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"
                           value={props.user.email || ''} onChange={updateEmail}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"
                           value={props.user.password || ''} onChange={updatePassword}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                       value={props.user.address && props.user.address.street} onChange={updateStreet}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"
                           value={props.user.address && props.user.address.zipCode} onChange={updateZipCode}/>
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"
                           value={props.user.address && props.user.address.city} onChange={updateCity}/>
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="inputCountry">Country</label>
                    <input type="text" className="form-control" id="inputCountry"
                           value={props.user.address && props.user.address.country} onChange={updateCountry}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={saveUserDetails}>Save</button>
        </form>
    )
};

export default UserDetails;

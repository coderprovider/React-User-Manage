import React from 'react';
import "./UserList.scss"

const UserList = (props) => {

    return (
        <div className="list-group list-group-flush">
            <div className="list-group-item">
                <div className="top-container">
                    <div className="btn btn-primary new-user-button" onClick={props.onNewUser}>
                        New user
                    </div>
                    <input type="text" className="form-control user-search-box" placeholder="Find user..."
                           aria-label="Find user..."/>
                </div>
            </div>
            {props.users && props.users.map((u) =>
                <div key={u.id} className="list-group-item" onClick={props.onUserSelect}>
                    {u.name}
                </div>
            )}
        </div>
    )
};

export default UserList;
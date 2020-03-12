import React, {useState} from 'react';
import UserList from "../UserList/UserList";
import "./MainView.scss"

const initialUsers = [
    {id: 1, name: "Michal Kapiczynski"},
    {id: 2, name: "Jan Mroczek"}
];

const MainView = () => {
    const [users, setUsers] = useState(initialUsers);

    const addUser = () => {

    }
    return (
        <div className="main-view-container container-fluid">
            <div className="left-column">
                <div className="column-title">
                    User List
                </div>
                <UserList users={users} onNewUser={() => console.log("New User")}
                          onUserSelect={() => console.log("User selected")}/>
            </div>
            <div className="right-column">
                <div className="column-title">
                    User Details
                </div>
                <table className="user-editor" style={{display: "none"}}>
                    <thead>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <button className='submit-button user-editor' style={{display: "none"}}
                        onClick={() => ""}>Update Name
                </button>

            </div>
        </div>
    )
};

export default MainView;
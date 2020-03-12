import React, {useState} from 'react';
import _ from 'lodash'

import UserList from "../UserList/UserList";
import "./MainView.scss"
import UserDetails from "../UserDetails/UserDetails";

const initialUsers = [
    {
        id: 1, name: "Michal Kapiczynski", email: "email@gmail.com", password: "123", address: {
            street: "Nowa 13",
            zipCode: "13-154",
            city: "Warsaw",
            country: "Poland"
        }
    },
    {id: 2, name: "Jan Mroczek", email: "jan.mroczek@gmail.com", password: "123456", address: {
            street: "Main Street 154/12",
            zipCode: "X509",
            city: "Malahide",
            country: "Ireland"
        }}
];

const MainView = () => {
    const [users, setUsers] = useState(initialUsers);
    const [selectedUser, setSelectedUser] = useState({})

    const addUser = () => {

    }

    const selectUser = (userId) => {
        setSelectedUser(_.find(users, {id: userId}))
    }

    return (
        <div className="main-view-container container-fluid">
            <div className="left-column">
                <div className="column-title">
                    User List
                </div>
                <UserList users={users} onNewUser={() => console.log("New User")}
                          onUserSelect={selectUser}/>
            </div>
            <div className="right-column">
                <div className="column-title">
                    User Details
                </div>
                <UserDetails user={selectedUser}/>
            </div>
        </div>
    );
};

export default MainView;
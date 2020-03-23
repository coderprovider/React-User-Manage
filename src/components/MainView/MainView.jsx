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
    {
        id: 2, name: "Jan Mroczek", email: "jan.mroczek@gmail.com", password: "123456", address: {
            street: "Main Street 154/12",
            zipCode: "X509",
            city: "Malahide",
            country: "Ireland"
        }
    }
];

const NEW_USER = {
    name: '',
    email: '',
    password: '',
    address: {street: '', zipCode: '', city: '', country: ''}
}

const MainView = () => {
    const [users, setUsers] = useState(initialUsers);
    const [selectedUser, setSelectedUser] = useState(NEW_USER)
    const [isNewUser, setIsNewUser] = useState(true);


    const selectUser = (userId) => {
        setIsNewUser(false)
        setSelectedUser(_.find(users, {id: userId}))
    }

    const handleNewUserButtonClick = () => {
        setIsNewUser(true);
        setSelectedUser(NEW_USER)
    }

    const saveNewUser = (newUser) => {
        newUser.id = users.length + 1
        setUsers([...users, newUser])
        setIsNewUser(false);
        setSelectedUser(newUser)
    }

    const updateUser = (userToUpdate) => {
        const updatedUsers = [...users]
        updatedUsers[userToUpdate.id - 1] = userToUpdate
        setUsers(updatedUsers)
    }

    const saveUser = (userToSave) => {
        if (isNewUser) {
            saveNewUser(userToSave)
        } else {
            updateUser(userToSave)
        }
    }

    const onSelectedUserChange = (user) => {
        setSelectedUser(user)
    }

    return (
        <div className="main-view-container container-fluid">
            <div className="left-column">
                <div className="column-title">
                    User List
                </div>
                <UserList users={users} onNewUser={handleNewUserButtonClick} onUserSelect={selectUser}/>
            </div>
            <div className="right-column">
                <div className="column-title">
                    {isNewUser ? "New User" : "User Details"}
                </div>

                <UserDetails user={selectedUser} onChange={onSelectedUserChange} onSave={saveUser}/>
            </div>
        </div>
    );
};

export default MainView;
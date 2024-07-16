import React, {Component} from 'react';
import _ from 'lodash'
import fuzzy from "fuzzy";
import UserList from "../UserList/UserList";
import "./MainView.scss"
import UserDetails from "../UserDetails/UserDetails";
import userService from "../../services/userService";

const NEW_USER = {
    name: '',
    email: '',
    password: '',
    address: {street: '', zipCode: '', city: '', country: ''}
}

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selectedUser: NEW_USER,
            isNewUser: true,
            filterPattern: '',
        }
    }

    filteredUsers = () => {
        return fuzzy
            .filter(
                this.state.filterPattern,
                this.state.users,
                {
                    extract: (el) => el.name
                }
            )
            .map((item) => item.original)
    }

    componentWillMount() {
        console.log('Will mount')
        userService.fetchUsers().then((users) => {
            this.setState({
                ...this.state,
                users: [...users]
            })
        })
    }

    selectUser = (userId) => {
        this.setState({
            ...this.state,
            isNewUser: false,
            selectedUser: _.find(this.state.users, {id: userId})
        })
    }

    handleNewUserButtonClick = () => {
        this.setState({
            ...this.state,
            isNewUser: true,
            selectedUser: NEW_USER
        })
    }

    saveNewUser = (newUser) => {
        userService.addUser(newUser).then(savedUser => {
            console.log("Saved", savedUser)
            this.setState({
                ...this.state,
                isNewUser: false,
                selectedUser: savedUser,
                users: [...this.state.users, savedUser]
            })
        })
    }

    updateUser = (userToUpdate) => {
        userService.updateUser(userToUpdate).then(() => {
            const updatedUsers = [...this.state.users]
            updatedUsers[userToUpdate.id - 1] = userToUpdate
            this.setState({
                ...this.state,
                users: updatedUsers
            })
        })
    }

    saveUser = (userToSave) => {
        if (this.state.isNewUser) {
            this.saveNewUser(userToSave)
        } else {
            this.updateUser(userToSave)
        }
    }

    onSelectedUserChange = (selectedUser) => {
        this.setState({
            ...this.state,
            selectedUser: selectedUser
        })
    }

    onFilterPatternChange = (pattern) => {
        this.setState({
            ...this.state,
            filterPattern: pattern
        })
    }

    render() {
        return (
            <div className="main-view-container container-fluid">
                <div className="left-column">
                    <div className="column-title">
                        User List
                    </div>
                    <UserList users={this.filteredUsers()} onNewUser={this.handleNewUserButtonClick}
                              onUserSelect={this.selectUser} filterPattern={this.state.filterPattern}
                              onFilterPatternChange={this.onFilterPatternChange}/>
                </div>
                <div className="right-column">
                    <div className="column-title">
                        {this.state.isNewUser ? "New User" : "User Details"}
                    </div>
                    <UserDetails user={this.state.selectedUser} onChange={this.onSelectedUserChange}
                                 onSave={this.saveUser}/>
                </div>
            </div>
        )
    }
};

export default MainView;
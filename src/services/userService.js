// For now users are stored in the array. Will be changed for the backend communication later
import axios from 'axios'

const SERVER_ADDRESS = 'http://localhost:8080'

const fetchUsers = () => {
    return axios.get(SERVER_ADDRESS + '/users')
        .then(res => {
            console.log(res.data)
            return res.data
        });
}

const addUser = (newUser) => {
    return axios.post(SERVER_ADDRESS + '/users', newUser).then(res => {
        console.log(res.data)
        return res.data
    })
}

const updateUser = (userToUpdate) => {
    return axios.post(SERVER_ADDRESS + '/users/' + userToUpdate.id, userToUpdate).then(res => {
        console.log(res.data)
        return res.data
    })
}


export default {
    fetchUsers,
    addUser,
    updateUser
}
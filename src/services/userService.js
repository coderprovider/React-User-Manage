// For now users are stored in the array. Will be changed for the backend communication later
import axios from 'axios'

const fetchUsers = () => {
    return axios.get(process.env.REACT_APP_API_URL + '/users')
        .then(res => {
            console.log(res.data)
            return res.data
        });
}

const addUser = (newUser) => {
    return axios.post(process.env.REACT_APP_API_URL + '/users', newUser).then(res => {
        console.log(res.data)
        return res.data
    })
}

const updateUser = (userToUpdate) => {
    return axios.post(process.env.REACT_APP_API_URL + '/users/' + userToUpdate.id, userToUpdate).then(res => {
        console.log(res.data)
        return res.data
    })
}


export default {
    fetchUsers,
    addUser,
    updateUser
}
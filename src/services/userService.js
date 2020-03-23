// For now users are stored in the array. Will be changed for the backend communication later

const users = [
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
]

const fetchUsers = () => {
    return new Promise((resolve, reject) => {
        resolve(users)
    })
}

const addUser = (newUser) => {
    return new Promise((resolve, reject) => {
        newUser.id = users.length + 1;
        users.push(newUser)
        console.log("After add", users)
        resolve(newUser);
    })
}

const updateUser = (userToUpdate) => {
    return new Promise((resolve, reject) => {
        users[userToUpdate.id - 1] = userToUpdate
        resolve()
    });
}


export default {
    fetchUsers,
    addUser,
    updateUser
}
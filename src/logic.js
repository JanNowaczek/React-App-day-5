const LOCAL_STORAGE_KEY = 'jfddl7-users'

class User {
    constructor(name, email, avatar){
        this.name = name
        this.email = email
        this.avatar = avatar
    }
}

const loadUsers = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []

const saveUser = (user) => {
    const currentUsers = loadUsers()

    const newUsers = currentUsers.concat(user)

    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newUsers)
    )
}

saveUser(
    new User('Jasiek', 'a@example.com')
)
saveUser(
    new User('Jasiek', 'a@example.com')
)

console.log(loadUsers())
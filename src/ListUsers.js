import React from 'react'

import List from './List'

import { loadUsers, deleteUser } from './logic'

class ListUsers extends React.Component {
    state = {
        users: loadUsers(),
    }

    deleteUserAndReRender = (uuid) => {
        deleteUser(uuid)

        this.setState({
            users: loadUsers(),
        })
    }

    render(){
        const filteredUsers = this.state.users.filter(
            user => true
        )

        return(
            <div>
                <List
                    users={filteredUsers}
                    deleteUserAndReRender={this.deleteUserAndReRender}
                />
            </div>
        )
    }
}

export default ListUsers
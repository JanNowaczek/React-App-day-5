import React from 'react'

import { User, saveUser } from './logic'

class AddUser extends React.Component {
    state = {
        name: '',
        email: '',
        avatar: '',
    }

    inputChangeHandler = (statePropName) => (event) => this.setState({
        [statePropName]: event.target.value
    })

    addClickHandler = () => {
        const user = new User(this.state.name, this.state.email, this.state.avatar)

        saveUser(user)
    }

    render() {
        return (
            <div>
                <input 
                    placeholder={'Wpisz imie'}
                    value={this.state.name}
                    onChange={this.inputChangeHandler('name')}
                />
                <input 
                    placeholder={'Wpisz email'}
                    value={this.state.email}
                    onChange={this.inputChangeHandler('email')}
                />
                <input 
                    placeholder={'Wpisz URL zdjecia'}
                    value={this.state.avatar}
                    onChange={this.inputChangeHandler('avatar')}
                />
                <button
                    onClick={this.addClickHandler}
                >
                    Dodaj
                </button>
            </div>
        )
    }
}
export default AddUser

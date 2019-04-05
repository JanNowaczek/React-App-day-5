import React from 'react'

import { deleteUser } from './logic'

import userPlaceholder from './user.svg'

const styles = {
    main: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    img: {
        width: 30,
        heigh: 30,
        borderRadius: '50%',
    }
}

const UserItem = (props) => (
    <div
        style={styles.main}
    >
        <div>
            <img
                src={props.user.avatar || userPlaceholder}
                style={styles.img}
                alt={props.user.name}
            />
        </div>
        <div>
            {props.user.name}
        </div>
        <div>
            {props.user.email}
        </div>
        <div>
            <button
             onClick={() => deleteUser(props.user.uuid)}
            >
                X
            </button>
        </div>
    </div>
)

export default UserItem
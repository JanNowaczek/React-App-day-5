import React from 'react'

const styles = {
    main: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    }
}

const UserItem = (props) => (
    <div
        style={styles.main}
    >
        <div>
            {props.user.avatar}
        </div>
        <div>
            {props.user.name}
            {props.user.email}
        </div>
        <div>
            <button>X</button>
        </div>
    </div>
)

export default UserItem
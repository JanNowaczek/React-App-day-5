import React from 'react'

import { button, buttonGreen } from './buttons.styles.js'



const ButtonGreen = (props) => (
    <div
        style={{
            ...button,
            ...buttonGreen,
        }}
    >
        ButtonGreen
    </div>
)



export default ButtonGreen;
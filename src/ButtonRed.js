import React from 'react'

import { button, buttonRed } from './buttons.styles.js'

const ButtonRed = (props) => (
    <div
        style={{
            ...button,
            ...buttonRed,
        }}

    >
        ButtonRed
      </div>
)



export default ButtonRed;
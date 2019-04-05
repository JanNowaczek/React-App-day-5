import React from 'react'

import { button, buttonYellow } from './buttons.styles.js'

const ButtonYellow = (props) => (
    <div
        style={{
            ...button,
            ...buttonYellow,
        }}
    >
        ButtonYellow
      </div>
)



export default ButtonYellow;
import React from 'react'

import { buttonRed} from'./ButtonRed.module.css'

import { button} from'./Buttons.module.css'

const ButtonRed = (props) => (
    <div
        className={button + ' ' + buttonRed}
    >
        ButtonRed
      </div>
)



export default ButtonRed;
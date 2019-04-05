import React from 'react'

import { buttonYellow} from'./ButtonYellow.module.css'

import { button} from'./Buttons.module.css'

const ButtonYellow = (props) => (
    <div
        className={button + ' ' + buttonYellow}
    >
        ButtonYellow
      </div>
)



export default ButtonYellow;
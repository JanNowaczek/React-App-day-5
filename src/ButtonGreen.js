import React from 'react'

import { buttonGreen} from'./ButtonGreen.module.css'

import { button} from'./Buttons.module.css'

const ButtonGreen = (props) => (
    <div
        className={button + ' ' + buttonGreen}
    >
        ButtonGreen
    </div>
)



export default ButtonGreen;
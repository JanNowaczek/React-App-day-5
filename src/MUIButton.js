import React from 'react'

import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const styles = {
    button: {
        margin: 20
    },
    green: {
        backgroundColor: 'green'
    }
}

const MUIButton = (props) => {
    const { classes } = props

    return (
        <div>
            <Button
                className={classes.button + ' ' + classes.green}
                variant={'contained'}
            >
                MUIButton
    </Button>
            <Button
                className={classes.button}
                variant={'contained'}
            >
                MUIButton
    </Button>
        </div>
    )
}

export default withStyles(styles)(MUIButton)
import React from 'react'
import { Alert } from '@material-ui/lab';


function InputError(props) {
    return (
        <Alert severity="error">{props.children}</Alert>

    )
}

export default InputError

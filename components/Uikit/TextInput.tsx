import React from 'react';
import TextField from '@mui/material/TextField'

const TextInput = (props) => {
    return (
        <TextField fullWidth={props.fullWidth} label={props.label} multiline={props.multiline} required={props.required} onChange={props.onChange} rows={props.rows} value={props.value} type={props.type} margin="dense"
            /> 
    )
}

export default TextInput;
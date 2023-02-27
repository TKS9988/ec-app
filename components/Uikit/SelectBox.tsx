import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBox(props) {
    return (
        <FormControl>
            <InputLabel>{props.label}</InputLabel>
            <Select required={props.required} value={props.value} onChange={(event) => props.select(event.target.value)} >
                {props.options.map((option) => (
                    <MenuItem key={option.id} value={option.name}>{option.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
  );
}
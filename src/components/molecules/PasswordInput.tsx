import { InputAdornment, TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';
import { EyeIcon } from 'mdi-react';
import React, { useState } from 'react';

export default function PasswordInput(props: TextFieldProps) {
    const [show, setShow] = useState(false);

    return (
        <TextField
            {...props}
            type={!show ? 'password' : 'text'}
            InputProps={{
                endAdornment: (
                    <InputAdornment
                        position="end"
                        onClick={() => setShow(!show)}
                    >
                        <EyeIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

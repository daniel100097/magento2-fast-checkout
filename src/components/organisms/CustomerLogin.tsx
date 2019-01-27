import { Grid, TextField } from '@material-ui/core';
import React from 'react';

export function CustomerLogin() {
    return (
        <Grid container={true} style={{ padding: '1em' }}>
            <TextField fullWidth={true} variant='outlined' label='email' />
        </Grid>
    );
}

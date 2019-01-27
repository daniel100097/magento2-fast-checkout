import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import useCheckoutConfig from '~/hooks/useCheckoutConfig';
import { CustomerLogin } from '../organisms/CustomerLogin';
import CustomerRegister from '../organisms/CustomerRegister';

export default function Checkout() {
    const { paymentMethods } = useCheckoutConfig();

    return (
        <Paper style={{ padding: '1rem' }}>
            <Grid container={true} direction="row">
                <CustomerLogin />
                <CustomerRegister />
            </Grid>
        </Paper>
    );
}

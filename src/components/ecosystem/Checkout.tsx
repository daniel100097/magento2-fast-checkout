import { Paper } from '@material-ui/core';
import React from 'react';
import useCheckoutConfig from '~/hooks/useCheckoutConfig';
import { CustomerLogin } from '../organisms/CustomerLogin';

export default function Checkout() {
    const { paymentMethods } = useCheckoutConfig();

    return (
        <Paper>
            <CustomerLogin />
        </Paper>
    );
}

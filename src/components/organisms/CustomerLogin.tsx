import {
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useCustomerLogin from '~/hooks/useCustomerLogin';
import useTranslate from '~/hooks/useTranslate';
import PasswordInput from '../molecules/PasswordInput';

export function CustomerLogin() {
    const { t } = useTranslate();
    const login = useCustomerLogin();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Grid container={true} direction="column">
            <Typography variant="h5">{t('Registered Customers')}</Typography>
            <Divider style={{ margin: '1rem 0 1rem' }} />
            <Typography variant="subtitle1">
                {t('If you have an account, sign in with your email address.')}
            </Typography>
            <TextField
                required={true}
                fullWidth={true}
                variant="outlined"
                type="email"
                label={t('Email')}
                margin="normal"
                onChange={({ target: { value } }) => setUsername(value)}
            />
            <PasswordInput
                required={true}
                variant="outlined"
                fullWidth={true}
                margin="normal"
                onChange={({ target: { value } }) => setPassword(value)}
                label={t('Password')}
            />
            <Grid
                container={true}
                direction="row"
                alignItems="center"
                style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
            >
                <Button
                    onClick={() => {
                        login({ username, password })
                            .then(() => toast.success(t('login success')))
                            .catch(err => toast.error(t(err.message)));
                    }}
                    variant="contained"
                    color="primary"
                >
                    {t('Sign in')}
                </Button>
                <Typography variant="body1" style={{ marginLeft: '0.5rem' }}>
                    <a href="/customer/account/forgotpassword/">
                        {t('Forgot Your Password?')}
                    </a>
                </Typography>
            </Grid>
        </Grid>
    );
}

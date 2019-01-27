import {
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';
import React from 'react';
import useTranslate from '~/hooks/useTranslate';
import PasswordInput from '../molecules/PasswordInput';

export function CustomerLogin() {
    const { t } = useTranslate();

    return (
        <Grid container={true} style={{ padding: '1em' }} direction="column">
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
            />
            <PasswordInput
                required={true}
                variant="outlined"
                fullWidth={true}
                margin="normal"
                label={t('Password')}
            />
            <Grid container={true} direction="row" alignItems="center">
                <Button variant="contained" color="primary">
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

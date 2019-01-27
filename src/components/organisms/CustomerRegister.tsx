import { Button, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useTranslate from '~/hooks/useTranslate';

export default function CustomerRegister() {
    const { t } = useTranslate();

    return (
        <Grid container={true} direction="column">
            <Typography variant="h5">{t('New Customers')}</Typography>
            <Divider style={{ margin: '1rem 0 1rem' }} />
            <Typography variant="subtitle1">
                {t(
                    'Creating an account has many benefits: check out faster, keep more than one address, track orders and more.'
                )}
            </Typography>
            <Button
                onClick={() => console.log(11)}
                style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
                variant="contained"
                color="primary"
            >
                {t('Create an Account')}
            </Button>
        </Grid>
    );
}

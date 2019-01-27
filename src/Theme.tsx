import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            input: { height: 'auto' },
            focused: { boxShadow: 'none' },
        },
    },
    typography: {
        useNextVariants: true,
    },
});

const Theme = ({ children }: any) => {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default Theme;

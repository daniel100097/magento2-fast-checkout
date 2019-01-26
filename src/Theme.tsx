import green from '@material-ui/core/colors/green';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';

const theme = createMuiTheme({
    palette: {
        secondary: green,
    },
    typography: {
        useNextVariants: true,
    },
});

const Theme = ({ children }: any) => {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default Theme;

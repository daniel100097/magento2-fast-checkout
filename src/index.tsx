import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
// @ts-ignore
import increaseSpecificity from 'jss-increase-specificity';
import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import JssProvider from 'react-jss/lib/JssProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import Checkout from './components/ecosystem/Checkout';
import Theme from './Theme';

const GlobalStyle = createGlobalStyle`
html{
    font-size: 16px;
}
`;

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

jss.use(increaseSpecificity());

async function bootstrap() {
    ReactDOM.render(
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <Theme>
                <ToastContainer />
                <GlobalStyle />
                <Checkout />
            </Theme>
        </JssProvider>,
        document.querySelector('#m2fc')
    );
}

// @ts-ignore
window.m2fc_bootstrap = bootstrap;

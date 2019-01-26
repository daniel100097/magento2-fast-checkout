import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './components/ecosystem/Checkout';
import Theme from './Theme';

async function bootstrap() {
    ReactDOM.render(
        <Theme>
            <Checkout />
        </Theme>,
        document.querySelector('#m2fc')
    );
}

// @ts-ignore
window.m2fc_bootstrap = bootstrap;

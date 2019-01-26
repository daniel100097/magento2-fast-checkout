import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './Theme';

async function bootstrap() {
    ReactDOM.render(
        <Theme>
            <div>RENDER!</div>
        </Theme>,
        document.querySelector('#m2fc-root')
    );
}

window.addEventListener('DOMContentLoaded', () => bootstrap());

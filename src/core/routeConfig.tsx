import React from 'react';

import {Router} from '@reach/router';

import App from 'screens/App';
import Player from 'screens/Player';

const routeConfig = (
    <Router>
        <App path="/">
            <Player path="/" />
        </App>
    </Router>
);

export default routeConfig;

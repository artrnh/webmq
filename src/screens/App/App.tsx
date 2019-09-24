import React from 'react';

import {RouteComponentProps} from '@reach/router';

import {ThemeProvider} from 'styled-components';
import theme, {GlobalStyle} from 'theme';

import Layout from 'components/Layout';

const App: React.FC<RouteComponentProps> = ({children}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            {children}
            <GlobalStyle />
        </Layout>
    </ThemeProvider>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyles';

import App from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App /> <GlobalStyle />
 </>
);




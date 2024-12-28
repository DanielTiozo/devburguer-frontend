import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter } from 'react-router-dom';

import stripePromise from './config/stripePromise';
import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks';
import { Router } from './routes';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={standardTheme}>
			<AppProvider>
				<Elements stripe={stripePromise}>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</Elements>
				<GlobalStyles />
				<ToastContainer autoClose={1500} theme="colored" />
			</AppProvider>
		</ThemeProvider>
	</React.StrictMode>,
);

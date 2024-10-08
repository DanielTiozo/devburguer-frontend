import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

import stripePromise from './config/stripePromise';
import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks';
import { Elements } from '@stripe/react-stripe-js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider>
			<Elements stripe={stripePromise}>
				<RouterProvider router={router} />
			</Elements>
			<GlobalStyles />
			<ToastContainer autoClose={1500} theme="colored" />
		</AppProvider>
	</React.StrictMode>,
);

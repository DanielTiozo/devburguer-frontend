import { createBrowserRouter } from 'react-router-dom';

import { Cart, Home, Login, Register, Menu, Checkuot, CompletePayment } from '../containers';
import { Footer, Header } from '../components';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Home />
				<Footer />
			</>
		),
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/cadastro',
		element: <Register />,
	},
	{
		path: '/cardapio',
		element: (
			<>
				<Header />
				<Menu />
				<Footer />
			</>
		),
	},
	{
		path: '/carrinho',
		element: <Cart />,
	},
	{
		path: '/checkout',
		element: <Checkuot />,
	},
	{
		path: '/completo',
		element: <CompletePayment />,
	},
]);

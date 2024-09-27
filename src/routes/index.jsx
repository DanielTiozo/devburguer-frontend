import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Menu } from '../containers/Menu';
import { Header } from '../containers/Header';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Home />
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
			</>
		),
	},
]);

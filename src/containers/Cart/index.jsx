import Logo from '../../assets/logo.svg';
import { CartItem } from '../../components';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
	return (
		<Container>
			<Banner>
				<img src={Logo} alt="logo devburg" />
			</Banner>
			<Title>Checkout - Pedido</Title>
			<Content>
				<CartItem />
				{/* <CartResume /> */}
			</Content>
		</Container>
	);
}

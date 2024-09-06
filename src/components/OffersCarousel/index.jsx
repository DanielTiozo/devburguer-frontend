import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { useEffect } from 'react';
import { Container, ContainerItems, Title } from './styles';

export function OffersCarousel() {
	const [offers, setOffers] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');

			const onlyOffers = data.filter((product) => product.offer);
			setOffers(onlyOffers);
		}
		loadProducts();
	}, []);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<Container>
			<Title>Ofertas do dia</Title>

			<Carousel responsive={responsive} infinite={true} partialVisbile={false} itemClass="carrousel-item">
				{offers.map((product) => (
					<ContainerItems key={product.id} imageUrl={product.url}>
						<p>{product.name}</p>
					</ContainerItems>
				))}
			</Carousel>
		</Container>
	);
}

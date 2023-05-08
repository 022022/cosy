import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAppSelector } from '../../app/hooks';
import { selectBurger } from '../burger/burgerSlice';
import { useState } from 'react';
import { AddRemoveButton } from '../../components/AddRemoveButton/AddRemoveButton';
import { BurgerImage } from '../../components/BurgerImage/BurgerImage/BurgerImage';

export function Order() {
    const [burgerQuantity, setBurgerQuantity] = useState(1);
    const burgerData = useAppSelector(selectBurger);
	const burgerOptions = burgerData.burger;

    let totalOrder = [];
    let totalPrice = 0;

    if (burgerOptions.length !== 0){
        for (const group of burgerOptions) {
            const categoryOrder: {category: string, ordered: string[]} = {
                category: group.category, ordered: []
            };
            for (const option of group.options) {
                if (option.added) {
                    totalPrice += option.info.cost;
                    categoryOrder.ordered.push(option.value);
                }
            }
            if(categoryOrder.ordered.length !== 0) {
                totalOrder.push(categoryOrder);
            }
        }
    }

    totalOrder = totalOrder.map((category) => (
		<p>
			{category.category}: {category.ordered.map((item) => item.toLowerCase()).join(', ')}
		</p>
	));


	return (
		<div className='main'>
			<Container className='d-flex flex-column gap-3 align-items-center py-4'>
				<ul className='order-list'>
					<li className='d-flex flex-column flex-sm-row justify-content-between align-items-center p-4p-4'>
						<div>
							<BurgerImage
								containerMaxHeight={160}
								containerMaxWidth={70}
							></BurgerImage>
						</div>
						<div className='d-flex w-100 flex-column'>
							<Link
								to='/additions'
								className='nav-link fw-bold pb-4'
							>
								<h4>Авторский Бургер</h4>
							</Link>
							<div className='text-muted pb-4 pe-4'>
								{totalOrder}
							</div>
							{totalPrice * burgerQuantity}
						</div>
						<div className='w-25'>
							<AddRemoveButton
								quantity={burgerQuantity}
								setQuantity={setBurgerQuantity}
							/>
						</div>
					</li>
				</ul>

				<Card className='text-center w-100' bg='dark' text='light'>
					<Card.Header>Заказ номер 32356</Card.Header>
					<Card.Body className='p-4'>
						<Card.Title>
							Сумма: {totalPrice * burgerQuantity} руб.
						</Card.Title>
						<Button variant='primary'>Заказать</Button>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
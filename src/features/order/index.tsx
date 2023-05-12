import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAppSelector } from '../../app/hooks';
import { selectBurger } from '../burger/burgerSlice';
import { OrderItem } from './OrderItem/OrderItem';

export function Order() {
    const burgerData = useAppSelector(selectBurger);
	const burgerOptions = burgerData.burger;
    const burgerOrders = burgerData.burgerOrders;

    let orderSum = 0
    const allOrders = [];

    if (burgerOptions.length !== 0){

        for(const order of burgerOrders) {
            if(order.orderId === 'new') continue;
            let totalPrice = 0;
            let ingredients = [];
			for (const group of burgerOptions) {
				const categoryOrder: { category: string; ordered: string[] } = {
					category: group.category,
					ordered: [],
				};
				for (const option of group.options) {
					if (order.ingredients.includes(option.id)) {
						totalPrice += option.info.cost;
						categoryOrder.ordered.push(option.value);
					}
				}
				if (categoryOrder.ordered.length !== 0) {
					ingredients.push(categoryOrder);
				}
			}

			const orderDescription = ingredients.map((category) => (
				<li key={category.category}>
					{category.category}:{' '}
					{category.ordered
						.map((item) => item.toLowerCase())
						.join(', ')}
				</li>
			));

            orderSum += totalPrice * order.quantity;

			allOrders.push(
				<OrderItem
					key={order.orderId}
					orderId={order.orderId}
					orderQuantity={order.quantity}
					orderDescription={orderDescription}
					totalPrice={totalPrice}
				></OrderItem>
			);
		}
    }


	return (
		<div className='main'>
			<Container className='d-flex flex-column gap-3 align-items-center py-4'>
				<ul className='order-list'>
                    {allOrders}
				</ul>

				<Card className='text-center' bg='dark' text='light'>
					<Card.Header>Заказ номер 32356</Card.Header>
					<Card.Body className='p-4'>
						<Card.Title>
							Сумма: {orderSum} руб.
						</Card.Title>
						<Button variant='primary'>Заказать</Button>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
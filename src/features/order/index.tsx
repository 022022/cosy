import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../../app/hooks';
import { selectBurger, selectBurgerOrders } from '../burger/burgerSlice';
import { OrderItem } from './OrderItem/OrderItem';
import { useNavigate } from 'react-router-dom';

export function Order() {
    const burgerOptions = useAppSelector(selectBurger);
    const burgerOrders = useAppSelector(selectBurgerOrders);
    const navigate = useNavigate();

    let orderSum = 0;
    const allOrders = [];

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

	function navigateToBurger() {
		navigate('/burger/new', { replace: true });
	}

	return (
		<div className='main'>
			<Container className='d-flex flex-column gap-3 align-items-center py-4'>
                <h1>Заказ</h1>
				{burgerOrders.length <= 1 ? (
					<>
						<p className='lead text-light'>
							Создай свой авторский бургер!
						</p>
						<Button
							size='lg'
							className='btn btn-primary'
							onClick={navigateToBurger}
						>
							Хочу бургер!
						</Button>
					</>
				) : (
					<>
						<ul className='order-list'>{allOrders}</ul>

						<div className='my-4 d-flex flex-column gap-3 align-items-center'>
							<p className='order-list__sum lead'>
								Сумма: {orderSum} руб.
							</p>
							<Button variant='primary' size='lg'>
								Заказать
							</Button>
						</div>
					</>
				)}
			</Container>
		</div>
	);
}
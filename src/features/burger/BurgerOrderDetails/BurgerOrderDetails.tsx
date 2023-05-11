import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../../../app/hooks';
import { finalizeOrder, selectBurger } from '../burgerSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export function BurgerOrderDetails({ orderId }: { orderId: string }) {
	const burgerData = useAppSelector(selectBurger);
	const burgerOptions = burgerData.burger;
    const dispatch = useDispatch();

    const added = new Set(burgerData.burgerOrders.find((item) => item.orderId === orderId)?.ingredients);

	let totalPrice = 0;

	const pricesByCategory = [];

	const nonVisualIngredients = [];

	for (let i = 0; i < burgerOptions.length; i++) {
		const category = burgerOptions[i];
		let price = 0;
		for (const option of category.options) {
			if (added.has(option.id)) {
				price += option.info.cost;
				totalPrice += option.info.cost;
			}
		}

		if (!category.showVisual) {
			const addedOptions = category.options
				.filter((option) => added.has(option.id))
				.map((option) => option.value);

			nonVisualIngredients.push(
				<li key={i}>
					<div className='burger__key'>{category.category} </div>
					<div className='burger__value'>
						{addedOptions.length > 0
							? addedOptions.join(', ')
							: 'не добавлены'}
					</div>
				</li>
			);
		}

		pricesByCategory.push(
			<li key={i}>
				<div className='burger__key'>{category.category}</div>
				<div className='burger__value'>{price} руб.</div>
			</li>
		);
	}

	return (
		<div className='burger__order-details'>
			<ul className='burger__order-details-list'>
				{nonVisualIngredients}
			</ul>
			<div className='burger__price'>
				<div className='burger__key'>Всего</div>
				<div className='burger__value'>{totalPrice} руб.</div>
			</div>
			<Link to='/order'>
				<Button
					size='lg'
					className='w-100'
					onClick={() =>
						dispatch(
							finalizeOrder({
								orderId,
								ingredients: Array.from(added),
							})
						)
					}
				>
					Хочу!
				</Button>
			</Link>
		</div>
	);
}

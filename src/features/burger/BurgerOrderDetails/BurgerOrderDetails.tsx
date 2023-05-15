import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../../../app/hooks';
import { finalizeOrder, selectBurger, selectBurgerOrderById } from '../burgerSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export function BurgerOrderDetails({ orderId }: { orderId: string }) {
	const burgerOptions = useAppSelector(selectBurger);
    const dispatch = useDispatch();

    const added = useAppSelector((state) =>	selectBurgerOrderById(state, orderId));

    const navigate = useNavigate();

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

	function order() {
		dispatch(
			finalizeOrder({
				orderId,
				ingredients: Array.from(added),
			})
		);
		navigate('/order', { replace: true });
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
			<Button size='lg' onClick={order}>
				Хочу!
			</Button>
		</div>
	);
}

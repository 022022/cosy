import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../../../app/hooks';
import { selectBurger } from '../burgerSlice';
import { Link } from 'react-router-dom';

export function BurgerOrderDetails() {
    const burgerData = useAppSelector(selectBurger);
	const burgerOptions = burgerData.burger;

	let totalPrice = 0;

	const pricesByCategory = [];

    const nonVisualIngredients = [];

	for (let i = 0; i < burgerOptions.length; i++) {
		const category = burgerOptions[i];
		let price = 0;
		for (const option of category.options) {
			if (option.added) {
				price += option.info.cost;
				totalPrice += option.info.cost;
			}
		}

        if (!category.showVisual) {
            const added = category.options
				.filter((option) => option.added)
				.map((option) => option.value);

            nonVisualIngredients.push(
				<li key={i}>
					<div className='burger__key'>{category.category} </div>
					<div className='burger__value'>{
                        added.length > 0 ? added.join(', ') : 'не добавлены'
                        }
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
				{ nonVisualIngredients }
			</ul>
			<div className='burger__price'>
				<div className='burger__key'>Всего</div>
				<div className='burger__value'>{totalPrice} руб.</div>
			</div>
			<Link to='/order'>
				<Button size='lg' className='w-100'>Хочу!</Button>
			</Link>
		</div>
	);
}

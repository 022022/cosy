import Button from 'react-bootstrap/Button';
import { BurgerGroup } from '../../types/types';

export function BurgerOrderDetails({ burgerOptions }: { burgerOptions: BurgerGroup[] }) {
    let totalPrice = 0;
    const pricesByCategory = [];

    for (let i = 0; i < burgerOptions.length; i++) {
        const category = burgerOptions[i];
        let price = 0;
        for (const option of category.options) {
            if (option.added) {
                price += option.info.cost;
                totalPrice += option.info.cost;
            }
        }

        pricesByCategory.push(
            <li key={i}>
                <div className='burger__key'>{category.category}</div>
                <div className='burger__value'>{price} руб.</div>
            </li>
        )

    }

	return (
		<div className='burger__order-details'>
			<ul className='burger__order-details-list'>
                {pricesByCategory}
			</ul>
			<div className='burger__price'>
				<div className='burger__key'>Всего</div>
				<div className='burger__value'>{totalPrice} руб.</div>
			</div>
			<Button size='lg'>Хочу!</Button>
		</div>
	);
}

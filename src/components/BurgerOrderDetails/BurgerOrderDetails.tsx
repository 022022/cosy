import Button from 'react-bootstrap/Button';

export function BurgerOrderDetails() {
	return (
		<div className='burger__order-details'>
			<ul className='burger__order-details-list'>
				<li>
					<div className='burger__key'>Булочка</div>
					<div className='burger__value'>148</div>
				</li>
				<li>
					<div className='burger__key'>Котлета</div>
					<div className='burger__value'>148</div>
				</li>
				<li>
					<div className='burger__key'>Овощи</div>
					<div className='burger__value'>148</div>
				</li>
				<li>
					<div className='burger__key'>Сыр</div>
					<div className='burger__value'>148</div>
				</li>
				<li>
					<div className='burger__key'>Добавки</div>
					<div className='burger__value'>148</div>
				</li>
			</ul>
			<div className='burger__price'>
				<div className='burger__key'>Всего</div>
				<div className='burger__value'>536 руб.</div>
			</div>
			<Button size='lg'>
				Хочу!
			</Button>
		</div>
	);
}

export function BurgerOrderDetails() {
	return (
		<div className='burger__order-details'>
			<h1>Особенный бургер</h1>
			<ul className='burger__order-details-list'>
				<li>
					<div className='burger__key'>Вес</div>
					<div className='burger__value'>148гр</div>
				</li>
				<li>
					<div className='burger__key'>Калорийность</div>
					<div className='burger__value'>148</div>
				</li>
				<li>
					<div className='burger__key'>Белки</div>
					<div className='burger__value'>148</div>
				</li>
				<li>
					<div className='burger__key'>Жиры</div>
					<div className='burger__value'>148</div>
				</li>
				<li>
					<div className='burger__key'>Углеводы</div>
					<div className='burger__value'>148</div>
				</li>
			</ul>
			<div>536 руб</div>
			<button className='burger__button'>Заказать</button>
		</div>
	);
}

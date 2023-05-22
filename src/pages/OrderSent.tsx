export function OrderSent() {
	return (
		<div className='info-page'>
			<img
				alt='Логотип бургерной Раз-два-три бургер'
				src='images/logo123burger.svg'
				style={{
					height: 36,
					width: 230,
					filter: 'brightness(75%)',
				}}
			/>

			<p className='fs-1 mt-4'>Спасибо!</p>
			<p className='w-50'>Мы уже готовим Ваш заказ</p>
			<p className='w-50'>Ожидайте звонка </p>
		</div>
	);
}

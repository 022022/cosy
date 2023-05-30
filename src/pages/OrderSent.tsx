import { useAppSelector } from '../app/hooks';
import { selectTotalOrderStatus } from '../features/order/totalOrderSlice';

export function OrderSent() {
    const status = useAppSelector(selectTotalOrderStatus);

    switch (status) {
		case 'sending': {
			return <p className = 'text-center pt-3'> Заказ отправляется...</p>;
		}
		case 'success': {
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

					<h1 className='mt-5 mb-5'>Спасибо!</h1>
					<p className='w-50'>Мы уже готовим Ваш заказ</p>
					<p className='w-50'>Ожидайте звонка </p>
				</div>
			);
		}
        case 'failed': {
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

                    <h1 className='mt-5 mb-5'>Что-то пошло не так</h1>
                    <p className='w-50'>Ваш заказ не отправился</p>
                    <p className='w-50'>
                        Попробуйте сделать заказ чуть позже
                    </p>
                </div>
            );
        }
	}
    return null;
}

import { Link } from 'react-router-dom';
import { BurgerImage } from '../../../components/BurgerImage/BurgerImage/BurgerImage';
import { AddRemoveButton } from '../../../components/AddRemoveButton/AddRemoveButton';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../../burger/burgerSlice';

export function OrderItem({
	orderId,
	orderDescription,
	totalPrice,
	orderQuantity,
}: {
	orderId: string;
	orderDescription: ReactNode[];
	totalPrice: number;
	orderQuantity: number;
}) {
	const dispatch = useDispatch();

	function setBurgerQuantity(quantity: number) {
		dispatch(setQuantity({ orderId, quantity }));
	}

	return (
		<li className='order-list__item d-flex gap-5 flex-column flex-md-row justify-content-between align-items-center py-4 px-5'>
			<Link to={`/burger/${orderId}`}>
				<BurgerImage
					containerMaxHeight={150}
					containerMaxWidth={90}
					orderId={orderId}
				></BurgerImage>
			</Link>
			<div className='d-flex w-100 flex-column align-items-center align-items-md-start'>
				<Link to={`/burger/${orderId}`} className='fs-3 mb-4'>
					Авторский Бургер
				</Link>

				<ul className='pb-4 pe-4'>{orderDescription}</ul>

				<div className='fs-3'>{totalPrice * orderQuantity} руб.</div>
			</div>
			<div className='w-25'>
				<AddRemoveButton
					quantity={orderQuantity}
					setQuantity={(q) => setBurgerQuantity(q)}
				/>
			</div>
		</li>
	);
}
import { Link } from 'react-router-dom';
import { BurgerImage } from '../../../components/BurgerImage/BurgerImage/BurgerImage';
import { AddRemoveButton } from '../../../components/AddRemoveButton/AddRemoveButton';
import { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../../burger/burgerSlice';

export function OrderItem({
	orderId,
	totalOrder,
	totalPrice,
    orderQuantity
}: {
	orderId: string;
	totalOrder: ReactNode[];
	totalPrice: number;
    orderQuantity: number;
}) {
	const dispatch = useDispatch();

    function setBurgerQuantity(quantity: number){
        dispatch(setQuantity({ orderId, quantity }));
    }


	return (
		<li

			className='d-flex gap-5 flex-column flex-sm-row justify-content-between align-items-center p-4'
		>
			<div>
				<BurgerImage
					containerMaxHeight={150}
					containerMaxWidth={90}
					orderId={orderId}
				></BurgerImage>
			</div>
			<div className='d-flex w-100 flex-column'>
				<Link
					to={`/burger/${orderId}`}
					className='nav-link fw-bold pb-4'
				>
					<h4>Авторский Бургер</h4>
				</Link>
				<div className='pb-4 pe-4'>{totalOrder}</div>

				<div className='lead'>{totalPrice * orderQuantity} руб.</div>
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
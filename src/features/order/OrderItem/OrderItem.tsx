import { Link } from 'react-router-dom';
import { BurgerImage } from '../../../components/BurgerImage/BurgerImage/BurgerImage';
import { AddRemoveButton } from '../../../components/AddRemoveButton/AddRemoveButton';
import { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBurger, setQuantity } from '../../burger/burgerSlice';
import { Button } from 'react-bootstrap';

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
    const [showConfirmation, setShowConfirmation] = useState(false) ;

	function setBurgerQuantity(quantity: number) {
        if(quantity === 0) {
            setShowConfirmation(true);
        } else {
            dispatch(setQuantity({ orderId, quantity }));
        }
	}

	return (
		<li className='order-list__item d-flex gap-5 flex-column flex-md-row align-items-center py-4 px-3 px-md-5'>
			<Link to={`/burger/${orderId}`} title='Поменять ингредиенты'>
				<BurgerImage
					containerMaxHeight={150}
					orderId={orderId}
          sizeCoefficient={0.4}
				></BurgerImage>
			</Link>
			<div className='d-flex w-100 flex-column align-items-center align-items-md-start'>
				<Link to={`/burger/${orderId}`} className='fs-3 mb-4'>
					Авторский Бургер
				</Link>

				<ul className='pb-4'>{orderDescription}</ul>

				<div className='fs-3'>{totalPrice * orderQuantity} руб.</div>
			</div>
			<div className='position-relative pe-4'>
				<AddRemoveButton
					quantity={orderQuantity}
					setQuantity={(q) => setBurgerQuantity(q)}
				/>

				{showConfirmation && (
					<div className='order-list__confirmation'>
						Удалить из заказа?
						<Button
							variant='secondary'
							size='sm'
							onClick={() => dispatch(removeBurger({ orderId }))}
						>
							Удалить
						</Button>
						<Button size='sm' onClick={() => setShowConfirmation(false)}>
							Оставить
						</Button>
					</div>
				)}
			</div>
		</li>
	);
}
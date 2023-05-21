import { Nav } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';
import { selectBurgerOrders } from '../../features/burger/burgerSlice';
import { NavLink } from 'react-router-dom';

export function OrderCounter() {
    const orders = useAppSelector(selectBurgerOrders);
	let orderQuantity = orders.reduce(
			(sum, item) => sum + item.quantity,
			0
		);
        
    return <>
    	{
			orderQuantity > 0 ? (
				<Nav>
					<Nav.Link
						to='/order'
						as={NavLink}
						className='nav-link'
						eventKey='4'
					>
						Мой заказ ({orderQuantity})
					</Nav.Link>
				</Nav>
			) : (
				''
			)
		}
    </>

}
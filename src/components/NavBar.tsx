import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectBurgerOrders } from '../features/burger/burgerSlice';

export function NavBar() {
    const orders = useAppSelector(selectBurgerOrders);
	return (
		<Navbar
			expand='lg'
			bg='black'
			variant='dark'
			fixed='top'
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand>
					<Nav.Link
						to='/'
						as={NavLink}
						className='nav-link'
						eventKey='0'
						end
					>
						<div className='logo'></div>
					</Nav.Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link
							to='/burger/new'
							as={NavLink}
							className='nav-link'
							eventKey='1'
						>
							Новый бургер
						</Nav.Link>
					</Nav>
					{orders.length > 1 ? (
						<Nav>
							<Nav.Link
								to='/order'
								as={NavLink}
								className='nav-link'
								eventKey='4'
							>
								Мой заказ ({orders.length - 1})
							</Nav.Link>
						</Nav>
					) : (
						''
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

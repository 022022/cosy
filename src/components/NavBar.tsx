import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function NavBar() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed="top">
			<Container>
				<NavLink to='/' end>
					<Navbar.Brand>123Burger</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<NavLink to='/burger' className='nav-link'>
							Бургер
						</NavLink>

						<NavLink to='/additions' className='nav-link'>
							К бургеру
						</NavLink>

						<NavLink to='/' className='nav-link'>
							Доставка
						</NavLink>
					</Nav>
					<Nav>
						<Nav.Link href='#'>Мой заказ</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

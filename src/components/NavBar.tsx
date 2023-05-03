import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function NavBar() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<NavLink to='/' end>
					<Navbar.Brand>123Burger</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#'>Бургер</Nav.Link>
                        
						<NavLink to='/additions' className='nav-link'>
							К бургеру
						</NavLink>

						<Nav.Link href='#'>Доставка</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href='#'>Мой заказ</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

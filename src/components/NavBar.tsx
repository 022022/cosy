import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function NavBar() {
	return (
		<Container>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='black'
				variant='dark'
				fixed='top'
			>
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
							<NavLink to='/order' className='nav-link'>
								Мой заказ
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
}

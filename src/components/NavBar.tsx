import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function NavBar() {
	return (
			<Navbar
				expand='lg'
				bg='black'
				variant='dark'
				fixed='top'
				collapseOnSelect
			>
				<Container>
					<Nav.Link
						to='/'
						as={NavLink}
						className='nav-link'
						eventKey='0'
						end
					>
						<Navbar.Brand>123Burger</Navbar.Brand>
					</Nav.Link>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link
								to='/burger'
								as={NavLink}
								className='nav-link'
								eventKey='1'
							>
								Бургер
							</Nav.Link>

							<Nav.Link
								to='/additions'
								as={NavLink}
								className='nav-link'
								eventKey='2'
							>
								К бургеру
							</Nav.Link>

							<Nav.Link
								to='/'
								as={NavLink}
								className='nav-link'
								eventKey='3'
							>
								Доставка
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link
								to='/order'
								as={NavLink}
								className='nav-link'
								eventKey='4'
							>
								Мой заказ
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
	);
}

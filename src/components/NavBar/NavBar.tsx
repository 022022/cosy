import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { OrderCounter } from './OrderCounter';

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
				<Navbar.Brand>
					<Nav.Link
						to='/'
						as={NavLink}
						className='nav-link'
						eventKey='0'
						title='Сайт бургерной Раз-два-три бургер'
						end
					>
						<img
							alt='Логотип бургерной Раз-два-три бургер'
							src='images/logo123burger.svg'
							style={{
								height: 25,
								width: 160,
								filter: 'brightness(75%)',
							}}
						/>
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
                    <OrderCounter />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

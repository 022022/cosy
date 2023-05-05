import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

export function Order() {
	return (
		<Container className='d-flex flex-column gap-3 align-items-center py-4'>
			<ListGroup as='ul' className=''>
				<ListGroup.Item
					variant='dark'
					as='li'
					className='d-flex flex-column flex-sm-row justify-content-between align-items-center p-4p-4'
				>
					<div className='d-flex w-100 flex-column'>
						<Link to='/additions' className='nav-link fw-bold pb-4'>
							<h4>Авторский Бургер</h4>
						</Link>
						<small className='text-muted pb-4 pe-4'>
							Котлета, лук, помидоры, огурцы, лук, помидоры,
							огурцы, лук, помидоры, огурцы, лук, помидоры,
							огурцы, лук, помидоры, огурцы, лук, помидоры,
							огурцы, лук, помидоры, огурцы, лук, помидоры,
							огурцы, лук, помидоры, огурцы, лук, помидоры,
							огурцы, лук, помидоры, огурцы, лук, помидоры,
							огурцы, лук, помидоры, огурцы, лук, помидоры,
							огурцы, лук, помидоры, огурцы, лук, помидоры, огурцы
						</small>
						300 руб
					</div>
					<div className='w-25'>
						<ButtonGroup className='w-100'>
							<Button variant='secondary' className='w-25'>
								-
							</Button>
							<div className='w-50'>1</div>
							<Button variant='secondary' className='w-25'>
								+
							</Button>
						</ButtonGroup>
					</div>
				</ListGroup.Item>

				<ListGroup.Item
					variant='dark'
					as='li'
					className='d-flex flex-column flex-sm-row justify-content-between align-items-center p-4'
				>
					<div className='d-flex w-100 flex-column'>
						<Link to='/additions' className='nav-link fw-bold pb-4'>
							<h4>Картошка</h4>
						</Link>
						<small className='text-muted pb-4 pe-4'>
							Большая порция
						</small>
						300 руб
					</div>
					<div className='w-25'>
						<ButtonGroup className='w-100'>
							<Button variant='secondary' className='w-25'>
								-
							</Button>
							<div className='w-50'>1</div>
							<Button variant='secondary' className='w-25'>
								+
							</Button>
						</ButtonGroup>
					</div>
				</ListGroup.Item>
			</ListGroup>

			<Card className='text-center w-100' bg='dark' text='light'>
				<Card.Header>Заказ номер 32356</Card.Header>
				<Card.Body className='p-4'>
					<Card.Title>Сумма: 1467 руб</Card.Title>
					<Card.Text>Доставка: указать</Card.Text>
					<Button variant='primary'>Заказать</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}
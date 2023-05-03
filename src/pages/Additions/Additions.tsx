import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export function Additions() {
    function handleClick(
		eventKey: string | null,
		event: React.SyntheticEvent<unknown, Event>
	) {
		const element = document.getElementById(eventKey || '');
		element?.scrollIntoView();
	}
	return (
		<Container>
			<Row>
				<Col sm={3}>
					<div
						className='text-light h-100'
						style={{ backgroundColor: '#292929' }}
					>
						<Nav
							defaultActiveKey='0'
							className='flex-column position-sticky top-0 pt-4'
							onSelect={handleClick}
						>
							<Nav.Link eventKey='0'>Картошка</Nav.Link>
							<Nav.Link eventKey='1'>Картошка</Nav.Link>
							<Nav.Link eventKey='2'>Картошка</Nav.Link>
						</Nav>
					</div>
				</Col>
				<Col sm={9}>
					<div className='additions-list'>
						<h2 className='text-center text-light' id='0'>
							Картошка
						</h2>
						<div className='grid'>
							<Card bg='dark' text='light'>
								<Card.Img
									variant='top'
									src='./images/aleisha-kalina.jpg'
								/>
								<Card.Body>
									<Card.Title>Картошка</Card.Title>
									<Card.Text>
										Жареная картошка XL (300гр)
									</Card.Text>
									<small className='text-muted'>
										100 руб
									</small>
								</Card.Body>
								<Card.Footer>
									<ButtonGroup className='w-100'>
										<Button
											variant='secondary'
											className='w-25'
										>
											-
										</Button>
										<div className='w-50'>1</div>
										<Button
											variant='secondary'
											className='w-25'
										>
											+
										</Button>
									</ButtonGroup>
								</Card.Footer>
							</Card>
							<Card bg='dark' text='light'>
								<Card.Img
									variant='top'
									src='./images/aleisha-kalina.jpg'
								/>
								<Card.Body>
									<Card.Title>Картошка</Card.Title>
									<Card.Text>
										Жареная картошка XL (300гр)
									</Card.Text>
									<small className='text-muted'>
										100 руб
									</small>
								</Card.Body>
								<Card.Footer>
									<ButtonGroup className='w-100'>
										<Button
											variant='secondary'
											className='w-25'
										>
											-
										</Button>
										<div className='w-50'>1</div>
										<Button
											variant='secondary'
											className='w-25'
										>
											+
										</Button>
									</ButtonGroup>
								</Card.Footer>
							</Card>
							<Card bg='dark' text='light'>
								<Card.Img
									variant='top'
									src='./images/aleisha-kalina.jpg'
								/>
								<Card.Body>
									<Card.Title>Картошка</Card.Title>
									<Card.Text>
										Жареная картошка XL (300гр)
									</Card.Text>
									<small className='text-muted'>
										100 руб
									</small>
								</Card.Body>
								<Card.Footer>
									<ButtonGroup className='w-100'>
										<Button
											variant='secondary'
											className='w-25'
										>
											-
										</Button>
										<div className='w-50'>1</div>
										<Button
											variant='secondary'
											className='w-25'
										>
											+
										</Button>
									</ButtonGroup>
								</Card.Footer>
							</Card>
						</div>
						<h2 className='text-center text-light' id='1'>
							{' '}
							Картошка{' '}
						</h2>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

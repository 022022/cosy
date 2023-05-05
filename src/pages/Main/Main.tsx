import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { fetchBurgerData } from '../../services/sanity/burger';



export function Main(){
    // test - fetchBurgerData();

    return (
		<>
			<Container>
				<div className='main'>
					<div className='roadmap'>
						<Card bg='dark' text='light'>
							<Card.Body>
								<Card.Title>Собери бургер</Card.Title>
								<Card.Text>
									Из самых вкусных ингредиентов
								</Card.Text>
							</Card.Body>
						</Card>
						<Card bg='dark' text='light'>
							<Card.Body>
								<Card.Title>Добавь, что хочешь</Card.Title>
								<Card.Text>Картошка, салаты, напитки</Card.Text>
							</Card.Body>
						</Card>
						<Card bg='dark' text='light'>
							<Card.Body>
								<Card.Title>Встречай доставку</Card.Title>
								<Card.Text>Быстро и просто</Card.Text>
							</Card.Body>
						</Card>
					</div>

					<Button size='lg'>Хочу бургер!</Button>
				</div>
			</Container>
		</>
	);
}

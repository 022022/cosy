import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectBurger, getBurger } from './../../features/burger/burgerSlice';

export function Main(){
    const burgerData = useAppSelector(selectBurger);
	const dispatch = useAppDispatch();
    console.log(JSON.stringify(burgerData.burger), burgerData.status);

    console.log(burgerData.burger, burgerData.status);




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

					<Button size='lg' onClick={() => dispatch(getBurger())}>
						Хочу бургер!
					</Button>

				</div>
			</Container>
		</>
	);
}

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


export function Main(){
    const navigate = useNavigate();
    function navigateToBurger() {
        navigate('/burger/new', { replace: true });
    }

    return (
		<>
			<Container>
				<div className='main'>
					<h1>Создай свой авторский бургер!</h1>
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
								<Card.Text >Котлета, сыр, овощи, соусы</Card.Text>
							</Card.Body>
						</Card>
						<Card bg='dark' text='light'>
							<Card.Body>
								<Card.Title>Встречай доставку</Card.Title>
								<Card.Text>Быстро и просто</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<Button size='lg' className='btn btn-primary' onClick={navigateToBurger}>
						Хочу бургер!
					</Button>
				</div>
			</Container>

			<div className='bg'></div>
		</>
	);
}
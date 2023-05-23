import { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { finalizeTotalOrder } from '../features/order/totalOrderSlice';
import { selectBurgerOrders } from '../features/burger/burgerSlice';

export function Delivery() {
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);

    const dispatch = useAppDispatch();
    const burgerOrders = useAppSelector(selectBurgerOrders);


    const sentOrder = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
		const form = event.currentTarget;

		if (form.checkValidity() === false) {
            setValidated(true);
		} else {
            const formData = new FormData(event.currentTarget);

			dispatch(
				finalizeTotalOrder({
					burgerOrders,
					phone: formData.get('phone')?.toString() || '',
					address: formData.get('address')?.toString() || '',
				})
			);

            navigate('/confirm', { replace: true });
        }
	};

    return (
		<div className='info-page'>
			<h1>Введите данные для заказа</h1>
			<p>
				Это приложение находится на стадии proof of concept,
				смс-подтверждение пока не работает.
			</p>
			<p className='mb-5'>
				Чтобы получить код подтверждения, обратитесь к разработчику.
			</p>
			<Form noValidate validated={validated} onSubmit={sentOrder}>
				<Form.Group className='mb-3' controlId='phone'>
					<Form.Label>Введите номер телефона</Form.Label>
					<Form.Control
						type='tel'
						name='phone'
						autoComplete='on'
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Введите номер телефона
					</Form.Control.Feedback>
					<Form.Text>
						На этот номер придет СМС с кодом подтверждения
					</Form.Text>
				</Form.Group>
				<Form.Group className='mb-3' controlId='address'>
					<Form.Label>Адрес доставки</Form.Label>
					<Form.Control
						as='textarea'
						autoComplete='off'
						rows={3}
						name='address'
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Заполните, пожалуйста, это поле
					</Form.Control.Feedback>
				</Form.Group>
				<Button type='submit' size='lg' className='btn btn-primary'>
					Отправить
				</Button>
			</Form>
		</div>
	);
}
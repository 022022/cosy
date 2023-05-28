import { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectTotalOrder, sendTotalOrder } from '../features/order/totalOrderSlice';
import { clearBurgerOrders } from '../features/burger/burgerSlice';

export function ConfirmOrder() {
    const navigate = useNavigate();
    const totalOrder = useAppSelector(selectTotalOrder);
    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState(false);

    function checkSend(event: FormEvent<HTMLFormElement>) {
		event?.preventDefault();
		const form = event.currentTarget;

		if (form.checkValidity() === false) {
			setValidated(true);
		} else {
            dispatch(sendTotalOrder(totalOrder));
            dispatch(clearBurgerOrders());
            navigate('/order-sent', { replace: true });
		}
	}

    return (
		<div className='info-page'>
			<h1>Подтверждение*</h1>{' '}
			<p className='mt-5 mb-5'>
				*Смс-подтверждение пока в демо-режиме, поэтому просто введите
				любые четыре цифры
			</p>
			<Form onSubmit={checkSend} noValidate validated={validated}>
				<Form.Group className='mb-3' controlId='code'>
					<Form.Label>Введите код из СМС</Form.Label>
					<Form.Control
						autoComplete='off'
						size='lg'
						type='text'
						pattern='[0-9]{4}'
					/>
				</Form.Group>

				<Button size='lg' className='btn btn-primary' type='submit'>
					Отправить
				</Button>
			</Form>
		</div>
	);
}
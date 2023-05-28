import { FormEvent, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { finalizeTotalOrder } from '../features/order/totalOrderSlice';
import { selectBurgerOrders } from '../features/burger/burgerSlice';
import { nanoid } from '@reduxjs/toolkit';

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
					totalOrderId: nanoid(),
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
			<p className='mt-5 '>
				Отправьте номер телефона и адрес. Вам придет СМС с кодом
				подтверждения*
			</p>
			<p className='text-small mb-5'>
				*Смс-подтверждение пока в демо-режиме, поэтому просто введите на
				следующей странице любые четыре цифры
			</p>
			<Form
				noValidate
				validated={validated}
				onSubmit={sentOrder}
				className='col-sm-4 '
			>
				<Form.Group className='mb-3' controlId='phone'>
					<Form.Label>Телефон</Form.Label>
					<InputGroup className='mb-3' hasValidation>
						<InputGroup.Text>+7</InputGroup.Text>
						<Form.Control
							type='tel'
							name='phone'
							autoComplete='on'
							required
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							placeholder='111-111-1111'
						/>
						<Form.Control.Feedback type='invalid'>
							Введите номер телефона в формате 123-456-8901)
						</Form.Control.Feedback>
					</InputGroup>
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
						Укажите адрес доставки
					</Form.Control.Feedback>
				</Form.Group>
				<Button type='submit' size='lg' className='btn btn-primary'>
					Отправить
				</Button>
			</Form>
		</div>
	);
}
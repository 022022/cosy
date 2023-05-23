import { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectTotalOrder, sendTotalOrder } from '../features/order/totalOrderSlice';
import { clearBurgerOrders } from '../features/burger/burgerSlice';

export function ConfirmOrder() {
    const navigate = useNavigate();
    const [code, setCode] = useState('')
    const totalOrder = useAppSelector(selectTotalOrder);
    const dispatch = useAppDispatch();


    function checkSend(event: FormEvent<HTMLFormElement>) {
		event?.preventDefault();

        dispatch(sendTotalOrder(totalOrder));
        dispatch(clearBurgerOrders());

        navigate('/order-sent', { replace: true });
	}

    return (
		<div className='info-page'>
            <h1>Подтверждение</h1>
			<Form onSubmit={checkSend}>
				<Form.Group className='mb-3' controlId='code'>
					<Form.Label>Введите код из СМС</Form.Label>
					<Form.Control
                        autoComplete='off'
						size='lg'
						type='text'
						placeholder='Введите код из СМС'
						value={code}
						onChange={(e) => setCode(e.target.value)}
					/>
				</Form.Group>
				<Button
					disabled={code === ''}
					size='lg'
					className='btn btn-primary'
					type='submit'
				>
					Отправить
				</Button>
			</Form>
		</div>
	);
}
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function ConfirmOrder() {
    const navigate = useNavigate();
    const [code, setCode] = useState('')

    function sentCode(){
		navigate('/order-sent', { replace: true });
    }
    return (
		<div className='info-page'>
			<Form onSubmit={sentCode}>
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
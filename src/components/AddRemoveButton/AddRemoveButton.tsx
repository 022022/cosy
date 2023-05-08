import { Button, ButtonGroup } from 'react-bootstrap';

export function AddRemoveButton({
	quantity,
	setQuantity,
}: {
	quantity: number;
	setQuantity: (quantity: number) => void;
}) {
	return (
		<ButtonGroup className='w-100'>
			<Button
				variant='secondary'
				className='w-25'
				onClick={() => {
					quantity > 1 && setQuantity(quantity - 1);
				}}
			>
				−
			</Button>
			<div className='w-50 d-flex justify-content-center align-items-center bg-dark'>
				{quantity}
			</div>
			<Button
				variant='secondary'
				className='w-25'
				onClick={() => {
					setQuantity(quantity + 1);
				}}
			>
				+
			</Button>
		</ButtonGroup>
	);
}
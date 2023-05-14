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
				onClick={() => {
					setQuantity(quantity - 1);
				}}
			>
				−
			</Button>
			<div className='px-4 d-flex justify-content-center align-items-center bg-dark'>
				{quantity}
			</div>
			<Button
				variant='secondary'
				onClick={() => {
					setQuantity(quantity + 1);
				}}
			>
				+
			</Button>
		</ButtonGroup>
	);
}
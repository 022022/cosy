import { Form } from 'react-bootstrap';

export function HealthyMode({
	showNutrition,
	setShowNutrition,
}: {
	showNutrition: boolean;
	setShowNutrition: (showNutrition: boolean) => void;
}) {
	return (
		<div className='position-absolute top-0 end-0 p-3' style={{zIndex: 100}} >
			<Form.Check
				type='switch'
				label='Здоровое питание'
				id=''
				checked={showNutrition}
				onChange={() => setShowNutrition(!showNutrition)}
			/>
		</div>
	);
}

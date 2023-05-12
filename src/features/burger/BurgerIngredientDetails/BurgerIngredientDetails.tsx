import { BurgerInfo } from '../../../types/types';

export function BurgerIngredientDetails({ info }: {info: BurgerInfo}) {
	return (
		<div className='burger__ingredient-details'>
			<div>{info.weight} гр.</div>
			<div>{info.cost} руб.</div>
		</div>
	);
}
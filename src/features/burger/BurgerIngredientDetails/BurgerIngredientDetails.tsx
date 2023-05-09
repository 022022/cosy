import { BurgerIngredientDetailsProps } from '../../../types/types';

export function BurgerIngredientDetails({
	option
}: BurgerIngredientDetailsProps) {
	return (
		<div className='burger__ingredient-details'>
			<div>{option.info.weight} гр.</div>
			<div>{option.info.cost} руб.</div>
		</div>
	);
}
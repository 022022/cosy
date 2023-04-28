import { BurgerIngredientDetailsProps } from '../../types/types';


export function BurgerIngredientDetails({option}: BurgerIngredientDetailsProps) {
    return (
		<div className='burger__ingredient-details'>
			<div>{option.info.weight} гр.</div>
			<div>{option.info.cost} руб.</div>
			<div className='burger__nutritional-value'>
				<span>{option.info.calories}</span>/
				<span>{option.info.protein}</span>/
				<span>{option.info.fat}</span>/<span>{option.info.carbs}</span>
			</div>
		</div>
	);
}
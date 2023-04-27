import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { BurgerIngredientDetailsProps, BurgerOptionsType } from '../../types/types';


export function BurgerIngredientDetails({name, toggleItem, option, type}: BurgerIngredientDetailsProps) {
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
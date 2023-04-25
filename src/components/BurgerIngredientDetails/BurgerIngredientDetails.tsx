import { BurgerIngredientDetailsProps } from '../../types/types';

export function BurgerIngredientDetails({name, toggleItem, option, type}: BurgerIngredientDetailsProps) {
    return (
		<li className='burger__ingredient'>
			<label className='burger__ingredient-label'>
				<input
					name={name}
					type={type}
					id={option.id}
					checked={option.added}
					onChange={(e) =>
						toggleItem(
							(e.target as HTMLInputElement).id,
							type,
							(e.target as HTMLInputElement).checked
						)
					}
				></input>
				{option.value}
			</label>
			<div>{option.info.weight} гр.</div>
			<div>{option.info.cost} руб.</div>
			<div className='burger__nutritional-value'>
				<span>{option.info.calories}</span>/
				<span>{option.info.protein}</span>/
				<span>{option.info.fat}</span>/<span>{option.info.carbs}</span>
			</div>
		</li>
	);
}
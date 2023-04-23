import { BurgerIngredientDetailsProps } from '../../types/types';

export function BurgerIngredientDetails({name, toggleItem, option, type}: BurgerIngredientDetailsProps) {
    return (
		<li style={{display: 'flex'}}>
			<label>
				{option.value}
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
			</label>
			<div>{option.info.weight} гр.</div>
			<div>{option.info.cost} руб.</div>
			<div>
				<span>{option.info.calories}</span>/
				<span>{option.info.protein}</span>/
				<span>{option.info.fat}</span>/
				<span>{option.info.carbs}</span>
			</div>
		</li>
	);
}
import { BurgerOptionsListProps } from '../../types/types';
import { BurgerIngredientDetails } from '../BurgerIngredientDetails/BurgerIngredientDetails';

export function BurgerOptionsList({burgerOptions, toggleItem}: BurgerOptionsListProps) {
	    const groups = burgerOptions.map((group, groupIndex) => (
			<li key={groupIndex} className='burger__group'>
				<h2> {group.category} </h2>
				<ul className='burger__group-contents'>
					{group.options.map((option, index) => (
						<BurgerIngredientDetails
							name={String(groupIndex)}
							toggleItem={toggleItem}
							option={option}
							type={group.type}
							key={index}
						/>
					))}
				</ul>
			</li>
		));

    return (
		<div className='burger__options'>
			<ul className='burger__groups'>{groups}</ul>
		</div>
	);
}
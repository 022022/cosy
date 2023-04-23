import { useState } from 'react';
import { BurgerImage } from '../BurgerImage/BurgerImage';
import { burgerIngredients } from '../data/items';
import { BurgerIngredientDetails } from '../BurgerIngredientDetails/BurgerIngredientDetails';

export function BurgerConstructor() {
	const [burgerOptions, setBurgerOptions] = useState(burgerIngredients);

	const containerMaxHeight = Math.min(window.innerHeight - 200, 600);

	function toggleItem(target: string, type: string, checked: boolean) {
        switch (type) {
			case 'checkbox': {
				const newBurgerOptions = burgerOptions.map((group) => {
					for (let i = 0; i < group.options.length; i++) {
						if (group.options[i].id === target) {
							group.options[i].added = checked;
						}
					}
					return group;
				});
				setBurgerOptions(newBurgerOptions);
                break;
			}
            case 'radio': {
				const newBurgerOptions = burgerOptions.map((group) => {
					for (let i = 0; i < group.options.length; i++) {
						if (group.options[i].id === target) {
                            group.options.forEach((option) => option.added = false);
							group.options[i].added = true;
						}
					}
					return group;
				});
				setBurgerOptions(newBurgerOptions);
				break;
            }
            default: {
                return;
            }
		}
	}

    const groups = burgerOptions.map((group, groupIndex) => (
		<li key={groupIndex}>
			<h2> {group.category} </h2>
			<ul>
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
		<div style={{ display: 'flex' }}>
			<div>
				<BurgerImage
					burgerOptions={burgerOptions}
					containerMaxHeight={containerMaxHeight}
				></BurgerImage>
			</div>

			<ul>{groups}</ul>
		</div>
	);
}
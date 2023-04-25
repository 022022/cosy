import { useState } from 'react';
import { BurgerImage } from '../BurgerImage/BurgerImage';
import { burgerIngredients } from '../data/items';
import { BurgerOptionsList } from '../BurgerOptionsList/BurgerOptionsList';
import { BurgerOrderDetails } from '../BurgerOrderDetails/BurgerOrderDetails';

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

	return (
		<div className='burger__wrapper'>
			<div className='burger__order'>
				<BurgerOrderDetails></BurgerOrderDetails>

				<BurgerImage
					burgerOptions={burgerOptions}
					containerMaxHeight={containerMaxHeight}
				></BurgerImage>

			</div>

			<BurgerOptionsList
				burgerOptions={burgerOptions}
				toggleItem={toggleItem}
			></BurgerOptionsList>
		</div>
	);
}
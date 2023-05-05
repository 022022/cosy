import { useState } from 'react';
import { BurgerImage } from '../BurgerImage/BurgerImage';
import { burgerIngredients } from '../data/items';
import { BurgerOptionsList } from '../BurgerOptionsList/BurgerOptionsList';
import { BurgerOrderDetails } from '../BurgerOrderDetails/BurgerOrderDetails';
import { BurgerOptionsType } from '../../types/types';
import { HealthyMode } from '../HealthyMode/HealthyMode';

export function BurgerConstructor() {
    console.log('BurgerConstructor');
	const [burgerOptions, setBurgerOptions] = useState(burgerIngredients);

    const [showNutrition, setShowNutrition] = useState(false);

	const containerMaxHeight = Math.max(Math.min(window.innerHeight - 240, 600), 165);

	function toggleItem(target: string, type: BurgerOptionsType, checked: boolean) {
        switch (type) {
			case BurgerOptionsType.checkbox: {
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
			case BurgerOptionsType.radio: {
				const newBurgerOptions = burgerOptions.map((group) => {
					for (let i = 0; i < group.options.length; i++) {
						if (group.options[i].id === target) {
							group.options.forEach(
								(option) => (option.added = false)
							);
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
			<HealthyMode
				showNutrition={showNutrition}
				setShowNutrition={setShowNutrition}
			></HealthyMode>
			<div className='burger__order'>
				<BurgerOrderDetails
					showNutrition={showNutrition}
					burgerOptions={burgerOptions}
				></BurgerOrderDetails>

				<BurgerImage
					burgerOptions={burgerOptions}
					containerMaxHeight={containerMaxHeight}
				></BurgerImage>
			</div>

			<BurgerOptionsList
				showNutrition={showNutrition}
				burgerOptions={burgerOptions}
				toggleItem={toggleItem}
			></BurgerOptionsList>
		</div>
	);
}
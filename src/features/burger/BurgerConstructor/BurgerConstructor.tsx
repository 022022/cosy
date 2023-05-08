import { useState } from 'react';
import { BurgerImage } from '../../../components/BurgerImage/BurgerImage/BurgerImage';
import { BurgerOptionsList } from './../BurgerOptionsList/BurgerOptionsList';
import { BurgerOrderDetails } from './../BurgerOrderDetails/BurgerOrderDetails';
import { HealthyMode } from './../HealthyMode/HealthyMode';

export function BurgerConstructor() {
	const [showNutrition, setShowNutrition] = useState(false);

	const containerMaxHeight = Math.max(
		Math.min(window.innerHeight - 320, 600),
		165
	);

    const containerMaxWidth = 190;

	return (
		<div className='burger__wrapper'>
			<HealthyMode
				showNutrition={showNutrition}
				setShowNutrition={setShowNutrition}
			></HealthyMode>
			<div className='burger__order'>
				<BurgerOrderDetails
					showNutrition={showNutrition}
				></BurgerOrderDetails>
				<BurgerImage
					containerMaxHeight={containerMaxHeight}
					containerMaxWidth={containerMaxWidth}
				></BurgerImage>
			</div>

			<BurgerOptionsList
				showNutrition={showNutrition}
			></BurgerOptionsList>
		</div>
	);
}

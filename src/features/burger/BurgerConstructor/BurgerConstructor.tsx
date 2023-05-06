import { useEffect, useState } from 'react';
import { BurgerImage } from '../BurgerImage/BurgerImage';
import { BurgerOptionsList } from './../BurgerOptionsList/BurgerOptionsList';
import { BurgerOrderDetails } from './../BurgerOrderDetails/BurgerOrderDetails';
import { BurgerOptionsType } from '../types/types';
import { HealthyMode } from './../HealthyMode/HealthyMode';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getBurger, selectBurger } from '../burgerSlice';

export function BurgerConstructor() {
	const [showNutrition, setShowNutrition] = useState(false);

	const containerMaxHeight = Math.max(
		Math.min(window.innerHeight - 240, 600),
		165
	);

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
				></BurgerImage>
			</div>

			<BurgerOptionsList
				showNutrition={showNutrition}
			></BurgerOptionsList>
		</div>
	);
}

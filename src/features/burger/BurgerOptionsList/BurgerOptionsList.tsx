import { BurgerOptionsListProps } from '../../../types/types';
import { BurgerIngredientDetails } from '../BurgerIngredientDetails/BurgerIngredientDetails';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectBurger, toggleCheckbox, toggleRadio } from '../burgerSlice';

export function BurgerOptionsList({
	showNutrition,
}: BurgerOptionsListProps) {
	const burgerData = useAppSelector(selectBurger);
	const burgerOptions = burgerData.burger;

	const dispatch = useAppDispatch();

	const groups = burgerOptions.map((group, groupIndex) => (
		<li key={`group-${groupIndex}`} className='burger__group'>
			<h2> {group.category} </h2>
			<ul className=''>
				<Form className='burger__group-contents'>
					{group.options.map((option, index) => (
						<li
							className='burger__ingredient'
							key={`group-${groupIndex}-${index}`}
						>
							<Form.Check
								type={group.type}
								label={option.value}
								name={String(groupIndex)}
								id={option.id}
								checked={option.added}
								onChange={(e) => {
									if (group.type === 'radio') {
										dispatch(
											toggleRadio({
												id: (
													e.target as HTMLInputElement
												).id,
												name: (
													e.target as HTMLInputElement
												).name,
											})
										);
									} else {
										dispatch(
											toggleCheckbox({
												id: (
													e.target as HTMLInputElement
												).id,
											})
										);
									}
								}}
							/>
							<BurgerIngredientDetails
								showNutrition={showNutrition}
								option={option}
								key={index}
							/>
						</li>
					))}
				</Form>
			</ul>
		</li>
	));

	return (
		<div className='burger__options'>
			<div className='burger__options-wrapper'>
				<h1>Собери свой бургер</h1>
				<ul className='burger__groups'>{groups}</ul>
			</div>
		</div>
	);
}
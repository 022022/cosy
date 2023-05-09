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

	const groups = burgerOptions.map((group) => (
		<li key={`group-${group.categoryId}`} className='burger__group'>
			<h2> {group.category} </h2>
			<ul className=''>
				<Form className='burger__group-contents'>
					{group.options.map((option, index) => (
						<li
							className='burger__ingredient'
							key={`group-${group.categoryId}-${option.id}`}
						>
							<Form.Check
								type={group.type}
								label={option.value}
								name={group.categoryId}
								id={option.id}
								checked={option.added}
								onChange={() => {
									if (group.type === 'radio') {
										dispatch(
											toggleRadio({
												id: option.id,
												name: group.categoryId,
											})
										);
									} else {
										dispatch(
											toggleCheckbox({
												id: option.id,
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
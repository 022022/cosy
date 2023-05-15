import { BurgerIngredientDetails } from '../BurgerIngredientDetails/BurgerIngredientDetails';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addToOrder, removeFromOrder, selectBurger, selectBurgerOrderById } from '../burgerSlice';
import { BurgerGroup } from '../../../types/types';

export function BurgerOptionsList({ orderId }: { orderId: string }) {
	const burgerOptions = useAppSelector(selectBurger);

    const added = useAppSelector((state) =>
		selectBurgerOrderById(state, orderId)
	);

	const dispatch = useAppDispatch();

    function handleOnChange(optionId: string, group: BurgerGroup) {
		if (group.type === 'radio') {
			for (const opt of group.options) {
				dispatch(
					removeFromOrder({
						orderId,
						ingredients: [opt.id],
					})
				);
			}
			dispatch(
				addToOrder({
					orderId,
					ingredients: [optionId],
				})
			);
		} else {
			if (added.has(optionId)) {
				dispatch(
					removeFromOrder({
						orderId,
						ingredients: [optionId],
					})
				);
			} else {
				dispatch(
					addToOrder({
						orderId,
						ingredients: [optionId],
					})
				);
			}
		}
	}



	const groups = burgerOptions.map((group) => (
		<Form.Group key={`group-${group.categoryId}`} className='burger__group'>
			<h2> {group.category} </h2>
			<ul className='burger__group-contents'>
					{group.options.map((option, index) => (
						<li
							className='burger__ingredient'
							key={`group-${group.categoryId}-${option.id}`}
						>
							<Form.Check
								type={group.type}
								label={option.value}
								title={option.value}
								name={group.categoryId}
								id={option.id}
								checked={added.has(option.id)}
								onChange={() => handleOnChange(option.id, group)}
							/>
							<BurgerIngredientDetails
								info={option.info}
								key={index}
							/>
						</li>
					))}
			</ul>
		</Form.Group>
	));

	return (
		<div className='burger__options'>
			<div className='burger__options-wrapper'>
				<h1>Собери свой бургер</h1>
				<Form className='burger__groups'>{groups}</Form>
			</div>
		</div>
	);
}
import { BurgerOptionsListProps, BurgerOptionsType } from '../../types/types';
import { BurgerIngredientDetails } from '../BurgerIngredientDetails/BurgerIngredientDetails';
import Form from 'react-bootstrap/Form';

export function BurgerOptionsList({burgerOptions, toggleItem}: BurgerOptionsListProps) {

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
									type={
										group.type ===
										BurgerOptionsType.checkbox
											? 'checkbox'
											: 'radio'
									}
									label={option.value}
									name={String(groupIndex)}
									id={option.id}
									checked={option.added}
									onChange={(e) =>
										toggleItem(
											(e.target as HTMLInputElement).id,
											group.type,
											(e.target as HTMLInputElement)
												.checked
										)
									}
								/>
								<BurgerIngredientDetails
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
			<ul className='burger__groups'>{groups}</ul>
		</div>
	);
}
import { useState } from 'react';
import { BurgerImage } from '../BurgerImage/BurgerImage';
import { burgerIngredients } from '../data/items';

export function BurgerConstructor() {
	const [checkedItems, setCheckedItems] = useState(burgerIngredients);

	const containerHeight = window.innerHeight - 200;

	function addItem(target: string, checked: boolean) {
		const newCheckedItems = checkedItems.map((item) =>
			item.key === target
				? {
						key: target,
						visibility: checked,
						width: 340,
						height: 138,
				  }
				: item
		);

		setCheckedItems(newCheckedItems);
	}

	return (
		<>
			<label>
				Помидоры
				<input
					type='checkbox'
					id='05_pomodoro'
					onChange={(e) =>
						addItem(
							(e.target as HTMLInputElement).id,
							(e.target as HTMLInputElement).checked
						)
					}
				></input>
			</label>

			<label>
				Бекон
				<input
					type='checkbox'
					id='08_bacon'
					onChange={
						((e) => addItem((e.target as HTMLElement).id,
						(e.target as HTMLInputElement).checked)
                        )
					}
				></input>
			</label>

			<BurgerImage
				checkedItems={checkedItems}
				containerHeight={containerHeight}
			></BurgerImage>
		</>
	);
}
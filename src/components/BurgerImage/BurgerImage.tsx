import { AnimatePresence } from 'framer-motion';
import { BurgerImageProps } from '../../types/types';
import { BurgerIngredientImage } from '../BurgerIngredientImage/BurgerIngredientImage';

export function BurgerImage({ burgerOptions, containerMaxHeight }: BurgerImageProps) {
    const divisorHeight = 2;

    let containerHeight = Math.min(containerMaxHeight, window.innerHeight - 200);
    if (window.innerWidth < 900) containerHeight = Math.min(containerMaxHeight, window.innerHeight - 300);

    const itemsVisible = [];

    for(const group of burgerOptions) {
        for (const option of group.options) {
            if(option.added) {
                itemsVisible.push(option);
                if (option.visual.bottom !== null) {
					itemsVisible.push(option.visual.bottom);
				}
            }
        }
    }

    itemsVisible.sort((a, b) =>
		Number(a.id.slice(0, 2)) -
		Number(b.id.slice(0, 2)));

	const offset = Math.floor(containerHeight / itemsVisible.length);

	const firstElTopOffset = Math.floor(
		itemsVisible[0].visual.height / divisorHeight / 2
	);

	const images = [];

    let containerWidth = 0;

	for (let i = 0; i < itemsVisible.length; i++) {
		const height = Math.floor(itemsVisible[i].visual.height / divisorHeight);
		const width = itemsVisible[i].visual.width / divisorHeight;
        containerWidth = Math.max(width, containerWidth);

		const lastElemCompensation = Math.floor(
			itemsVisible[itemsVisible.length - 1].visual.height / divisorHeight / 2.5
		);

		const elCenter = Math.floor(height / 2);
		let top = Math.max(
			0,
			firstElTopOffset + offset * i - elCenter - lastElemCompensation
		);
		if (i === 1) top = top + itemsVisible[0].visual.height / divisorHeight / 2;

		const el = (
			<BurgerIngredientImage
				key={itemsVisible[i].id}
				height={height}
				width={width}
				id={itemsVisible[i].id}
				i={i}
				top={top}
			></BurgerIngredientImage>
		);
		images.push(el);
	}

	return (
		<div className='burger__image'>
			<div
				className='burger__whole'
				style={{
					height: `${containerHeight}px`,
					width: `${containerWidth}px`,
				}}
			>
				<AnimatePresence initial={false}>{images}</AnimatePresence>
			</div>
		</div>
	);
}

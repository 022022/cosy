import { AnimatePresence } from 'framer-motion';
import { BurgerImageProps } from '../../types/types';
import { BurgerIngredientImage } from '../BurgerIngredientImage/BurgerIngredientImage';

export function BurgerImage({ burgerOptions, containerMaxHeight }: BurgerImageProps) {
    const presetFirstElementWidth = 190;
    const containerHeight = containerMaxHeight;
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

    const divisor = Math.floor(itemsVisible[0].visual.width / presetFirstElementWidth);

	const offset = Math.floor(
		(containerHeight - itemsVisible[itemsVisible.length - 1].visual.height / divisor) / (itemsVisible.length - 1)
	);

	const firstElTopOffset = Math.floor(
		itemsVisible[0].visual.height / divisor / 2
	);

	const images = [];

    let containerWidth = Math.max(itemsVisible[0].visual.width / divisor, itemsVisible[itemsVisible.length - 1].visual.width / divisor);

	const firstEl = (
		<BurgerIngredientImage
			key={itemsVisible[0].id}
			height={Math.floor(itemsVisible[0].visual.height / divisor)}
			width={Math.floor(itemsVisible[0].visual.width / divisor)}
			id={itemsVisible[0].id}
			i={0}
			top={0}
		></BurgerIngredientImage>
	);
	images.push(firstEl);

	for (let i = 1; i < itemsVisible.length - 1; i++) {
		const height = Math.floor(itemsVisible[i].visual.height / divisor);
		const width = Math.floor(itemsVisible[i].visual.width / divisor);
        containerWidth = Math.max(width, containerWidth);

		const elCenter = Math.floor(height / 2);

		let top = firstElTopOffset +
				offset * i -
				elCenter;

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

    const lastElIndex = itemsVisible.length - 1;

    const lastEl = (
		<BurgerIngredientImage
			key={itemsVisible[lastElIndex].id}
			height={Math.floor(
				itemsVisible[lastElIndex].visual.height / divisor
			)}
			width={Math.floor(itemsVisible[lastElIndex].visual.width / divisor)}
			id={itemsVisible[lastElIndex].id}
			i={lastElIndex}
			top={containerHeight - Math.floor(
				itemsVisible[lastElIndex].visual.height / divisor)}
		></BurgerIngredientImage>
	);
	images.push(lastEl);

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

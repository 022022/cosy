import { AnimatePresence } from 'framer-motion';
import { BurgerImageProps } from '../types/types';
import { BurgerIngredientImage } from './../BurgerIngredientImage/BurgerIngredientImage';
import { useAppSelector } from '../../../app/hooks';
import { selectBurger } from '../burgerSlice';

export function BurgerImage({ containerMaxHeight }: BurgerImageProps) {
    const presetFirstElementWidth = 190;
    const containerHeight = containerMaxHeight;

    const burgerData = useAppSelector(selectBurger);
	const burgerOptions = burgerData.burger;

    const images = [];
    let containerWidth = 0;

if (burgerOptions.length !== 0){
    const itemsVisible = [];
	for (const group of burgerOptions) {
		for (const option of group.options) {
			if (option.added) {
				itemsVisible.push(option);
				//if (option.visual.bottom !== null) {
				//	itemsVisible.push(option.visual.bottom);
				//}
			}
		}
	}

	itemsVisible.sort(
		(a, b) => Number(a.id.slice(0, 2)) - Number(b.id.slice(0, 2))
	);

	const divisor = Math.floor(
		itemsVisible[0].visual.width / presetFirstElementWidth
	);

	const offset = Math.floor(
		(containerHeight -
			itemsVisible[itemsVisible.length - 1].visual.height / divisor) /
			(itemsVisible.length - 1)
	);

	const firstElTopOffset = Math.floor(
		itemsVisible[0].visual.height / divisor / 2
	);

	containerWidth = Math.max(
		itemsVisible[0].visual.width / divisor,
		itemsVisible[itemsVisible.length - 1].visual.width / divisor
	);

	const firstEl = (
		<BurgerIngredientImage
			key={itemsVisible[0].id}
			height={Math.floor(itemsVisible[0].visual.height / divisor)}
			width={Math.floor(itemsVisible[0].visual.width / divisor)}
			id={itemsVisible[0].id}
			i={0}
			top={0}
            src={itemsVisible[0].image.asset._ref}
		></BurgerIngredientImage>
	);
	images.push(firstEl);

	for (let i = 1; i < itemsVisible.length - 1; i++) {
		const height = Math.floor(itemsVisible[i].visual.height / divisor);
		const width = Math.floor(itemsVisible[i].visual.width / divisor);
		containerWidth = Math.max(width, containerWidth);

		const elCenter = Math.floor(height / 2);

		let top = firstElTopOffset + offset * i - elCenter;

        const src = itemsVisible[i].image.asset._ref;

		const el = (
			<BurgerIngredientImage
				key={itemsVisible[i].id}
				height={height}
				width={width}
				id={itemsVisible[i].id}
				i={i}
				top={top}
				src={src}
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
			top={
				containerHeight -
				Math.floor(itemsVisible[lastElIndex].visual.height / divisor)
			}
			src={itemsVisible[lastElIndex].image.asset._ref}
		></BurgerIngredientImage>
	);
	images.push(lastEl);
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

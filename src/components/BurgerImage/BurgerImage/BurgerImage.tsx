import { AnimatePresence } from 'framer-motion';
import { BurgerImageProps, ItemsVisible } from '../../../types/types';
import { BurgerIngredientImage } from './../BurgerIngredientImage/BurgerIngredientImage';
import { useAppSelector } from '../../../app/hooks';
import { selectBurger, selectBurgerOrderById } from '../../../features/burger/burgerSlice';

export function BurgerImage({ containerMaxHeight, containerMaxWidth, orderId }: BurgerImageProps) {
    const presetFirstElementWidth = containerMaxWidth;
    const containerHeight = containerMaxHeight;
    const burgerOptions = useAppSelector(selectBurger);
    const added = useAppSelector((state) =>	selectBurgerOrderById(state, orderId));

    const images = [];
    let containerWidth = 0;

if (burgerOptions.length !== 0){
    const itemsVisible: ItemsVisible[] = [];
	for (const group of burgerOptions) {
        if(group.showVisual) {
            for (const option of group.options) {
                if (added.has(option.id)) {
                    itemsVisible.push({
                        id: option.id,
                        width: option.visual.width,
                        height: option.visual.height,
                        image: option.image,
                    });
                    if (option.visual.bottom) {
                        itemsVisible.push({
                            id: option.visual.bottom.id,
                            width: option.visual.bottom.visual.width,
                            height: option.visual.bottom.visual.height,
                            image: option.visual.bottom.image,
                        });
                    }
                }
            }
        }

	}

	itemsVisible.sort(
		(a, b) => Number(a.id.slice(0, 2)) - Number(b.id.slice(0, 2))
	);

	const divisor = Math.floor(
		itemsVisible[0].width / presetFirstElementWidth
	);

	const offset = Math.floor(
		(containerHeight -
			itemsVisible[itemsVisible.length - 1].height / divisor) /
			(itemsVisible.length - 1)
	);

	const firstElTopOffset = Math.floor(
		itemsVisible[0].height / divisor / 2
	);

	containerWidth = Math.max(
		itemsVisible[0].width / divisor,
		itemsVisible[itemsVisible.length - 1].width / divisor
	);

	const firstEl = (
		<BurgerIngredientImage
			key={itemsVisible[0].id}
			height={Math.floor(itemsVisible[0].height / divisor)}
			width={Math.floor(itemsVisible[0].width / divisor)}
			id={itemsVisible[0].id}
			i={0}
			top={0}
            src={itemsVisible[0].image.asset._ref}
		></BurgerIngredientImage>
	);
	images.push(firstEl);

	for (let i = 1; i < itemsVisible.length - 1; i++) {
		const height = Math.floor(itemsVisible[i].height / divisor);
		const width = Math.floor(itemsVisible[i].width / divisor);
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
			height={Math.floor(itemsVisible[lastElIndex].height / divisor)}
			width={Math.floor(itemsVisible[lastElIndex].width / divisor)}
			id={itemsVisible[lastElIndex].id}
			i={lastElIndex}
			top={
				containerHeight -
				Math.floor(itemsVisible[lastElIndex].height / divisor)
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

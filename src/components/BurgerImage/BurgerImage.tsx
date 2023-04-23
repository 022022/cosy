import { BurgerImageProps } from '../../types/types';

export function BurgerImage({ burgerOptions, containerMaxHeight }: BurgerImageProps) {
    const divisorHeight = 2;

    let containerHeight = containerMaxHeight;

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
			<img
				height={height}
				width={width}
				key={itemsVisible[i].id}
				data-order={i}
				id={itemsVisible[i].id}
				src={`./images/${itemsVisible[i].id}.png`}
				alt=''
				style={{
					zIndex: 1000 - i,
					top: `${top}px`,
					opacity: 0,
					animationName: 'add',
				}}
			/>
		);

		images.push(el);
	}

	return (
		<div
			className='burger__total'
			id='burger-total'
			style={{ height: `${containerHeight}px`, width: `${containerWidth}px` }}
		>
			{images}
		</div>
	);
}

import { BurgerIngredientImageProps } from '../../types/types';

export function BurgerIngredientImage({
	height,
	width,
    id,
	i,
	top,
}: BurgerIngredientImageProps) {
	return (
		<img
			height={height}
			width={width}
			id={id}
			src={`./images/${id}.png`}
			alt=''
			style={{
				zIndex: 1000 - i,
				top: `${top}px`,
				opacity: 0,
				animationName: 'add',
			}}
		/>
	);
}
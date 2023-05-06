import { BurgerIngredientImageProps } from '../types/types';
import { motion } from 'framer-motion';

export function BurgerIngredientImage({
        height,
        width,
        id,
        i,
        top,
        src
    }: BurgerIngredientImageProps) {

        const PROJECT_ID = process.env.REACT_APP_API_PROJECT_ID;

        const [srcType, srcId, srcSize, srcExtension] = src.split('-');

        const variants = {
            initial: { opacity: 0 },
            enter: { opacity: 1, transition: { duration: 0.4, delay: 0.1 } },
            exit: { opacity: 0 },
        };

	return (
		<motion.img
			initial='initial'
			animate='enter'
			exit='exit'
			variants={variants}
			height={height}
			width={width}
			id={id}
			src={`https://cdn.sanity.io/images/${PROJECT_ID}/production/${srcId}-${srcSize}.png`}
			alt=''
			style={{
				zIndex: 999 - i,
				top: `${top}px`,
			}}
		/>
	);
}

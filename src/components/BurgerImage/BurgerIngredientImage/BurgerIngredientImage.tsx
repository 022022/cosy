import { useState } from 'react';
import { PROJECT_ID } from '../../../services/sanity/publicData';
import { BurgerIngredientImageProps } from '../../../types/types';
import { m } from 'framer-motion';
import { LazyMotion, domAnimation } from 'framer-motion';

export function BurgerIngredientImage({
        height,
        width,
        id,
        i,
        top,
        src
    }: BurgerIngredientImageProps) {
        const srcParts = src.split('-');

        const srcId = srcParts[1];
        const srcSize = srcParts[2];

        const variants = {
            initial: { opacity: 0 },
            enter: { opacity: 1, transition: { duration: 0.4, delay: 0.1 } },
            exit: { opacity: 0 },
        };

        const [loaded, setLoaded] = useState(false);

        const ingImg = new Image();
        ingImg.src = `https://cdn.sanity.io/images/${PROJECT_ID}/production/${srcId}-${srcSize}.png?w=${width}&h=${height}`;
        ingImg.onload = () => setLoaded(true);



	return (loaded ?
      <LazyMotion features={domAnimation}>
        <m.img
          initial='initial'
          animate='enter'
          exit='exit'
          variants={variants}
          height = {height}
          width= {width}
          id= {id}
          src = {ingImg.src}
          alt=''
          style ={{zIndex: 999 - i, top: `${top}px`}}
        />
      </LazyMotion>
      :
      <div className='skeleton' style={{width: `${width}px`, height: `${height}px`,  top: `${top}px`, position: `absolute`}}
     ></div>

	);
}

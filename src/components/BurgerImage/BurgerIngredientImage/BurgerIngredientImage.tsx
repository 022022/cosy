import { useState } from 'react';
import { IMAGE_LINK } from '../../../services/sanity/publicData';
import { BurgerIngredientImageProps } from '../../../types/types';
import { m } from 'framer-motion';
import { LazyMotion, domAnimation } from 'framer-motion';

export function BurgerIngredientImage({
        height,
        width,
        id,
        i,
        top,
        src,
        srcRetina
    }: BurgerIngredientImageProps) {

        const srcParts = src.split('-');
        const srcPartsRetina = srcRetina.split('-');

        const srcId = srcParts[1];
        const srcSize = srcParts[2];

        const srcIdRetina = srcPartsRetina[1];
        const srcSizeRetina = srcPartsRetina[2];

        const variants = {
            initial: { opacity: 0 },
            enter: { opacity: 1, transition: { duration: 0.4, delay: 0.1 } },
            exit: { opacity: 0 },
        };

        const [loaded, setLoaded] = useState(false);

        const ingImg = new Image();
        ingImg.srcset = `${IMAGE_LINK}${srcId}-${srcSize}.png 1x, ${IMAGE_LINK}${srcIdRetina}-${srcSizeRetina}.png 2x`;
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
          srcSet = {ingImg.srcset}
          alt=''
          style ={{zIndex: 999 - i, top: `${top}px`}}
        />
      </LazyMotion>
      :
      <div className='skeleton' style={{width: `${width}px`, height: `${height}px`,  top: `${top}px`, position: `absolute`}}
     ></div>

	);
}

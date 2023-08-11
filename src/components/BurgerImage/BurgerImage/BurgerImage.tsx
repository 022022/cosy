import { AnimatePresence } from 'framer-motion';
import { BurgerImageProps, ItemsVisible } from '../../../types/types';
import { BurgerIngredientImage } from './../BurgerIngredientImage/BurgerIngredientImage';
import { useAppSelector } from '../../../app/hooks';
import { selectBurger, selectBurgerOrderById, selectSuggestedOrder } from '../../../features/burger/burgerSlice';

export function BurgerImage({ containerMaxHeight, orderId, sizeCoefficient = 1}: BurgerImageProps) {
    const burgerOptions = useAppSelector(selectBurger);

    const added = useAppSelector((state) => {
            if(orderId === 'new') {
                return selectSuggestedOrder(state);
            } else {
                return selectBurgerOrderById(state, orderId);
            }
        }
    );

    if (burgerOptions.length === 0) return null;

    const itemsVisible: ItemsVisible[] = [];

    for (const group of burgerOptions) {
      if(group.showVisual) {
          for (const option of group.options) {
              if (added.has(option.id)) {
                  itemsVisible.push({
                      id: option.id,
                      width: Math.ceil(option.visual.width_sm * sizeCoefficient),
                      height: Math.ceil(option.visual.height_sm * sizeCoefficient),
                      imageRetina: option.image,
                      image: option.image_sm,
                  });
                  if (option.visual.bottom) {
                      itemsVisible.push({
                          id: option.visual.bottom.id,
                          width: Math.ceil(option.visual.bottom_sm.visual.width * sizeCoefficient),
                          height: Math.ceil(option.visual.bottom_sm.visual.height  * sizeCoefficient),
                          imageRetina: option.visual.bottom.image,
                          image: option.visual.bottom_sm.image,
                      });
                  }
              }
          }
      }
    }

    itemsVisible.sort(
      (a, b) => Number(a.id.slice(0, 2)) - Number(b.id.slice(0, 2))
    );


    const tops = Array(itemsVisible.length).fill(0);

    const maxHeightAll = itemsVisible.reduce((sum, item) => sum + item.height, 0);
    let offsetL = -maxHeightAll;
    let offsetR = maxHeightAll;

    while(offsetL < offsetR) {
          const mid = Math.floor((offsetL + offsetR) / 2);

          countTops(mid);

          if(tops[tops.length - 1] + itemsVisible[itemsVisible.length - 1].height > containerMaxHeight){
            offsetR = mid;
          } else {
            offsetL = mid + 1;
          }
    }

    function countTops(offset: number){
      tops[0] = 0;
      const firstElemAdditionalOffset = Math.floor(itemsVisible[1].height / 3);
      tops[1] = itemsVisible[0].height - Math.floor(itemsVisible[1].height / 2) + offset + firstElemAdditionalOffset;

      const firstElemCompensation = Math.floor(firstElemAdditionalOffset / itemsVisible.length - 1);

      for (let i = 2; i < itemsVisible.length; i++) {
        const elHalf = Math.floor(itemsVisible[i].height / 2);
        tops[i] = Math.floor(tops[i - 1] + itemsVisible[i - 1].height - elHalf + offset - firstElemCompensation);
      }
      return;
    }


    let widestImage = itemsVisible[0].width;
    for(const item of itemsVisible) {
      if(item.width > widestImage) widestImage = item.width;
    }

    const images = [];

    for (let i = 0; i < itemsVisible.length; i++) {
            const src = itemsVisible[i].image.asset._ref;
            const srcRetina = itemsVisible[i].imageRetina.asset._ref;

            const el = (
              <BurgerIngredientImage
                key={`${itemsVisible[i].id}-${orderId}`}
                height={itemsVisible[i].height}
                width={itemsVisible[i].width}
                id={`${itemsVisible[i].id}-${orderId}`}
                i={i}
                top={tops[i]}
                src={src}
                srcRetina={srcRetina}
              ></BurgerIngredientImage>
            );
            images.push(el);
    }

	return (
		<div className='burger__image'>
			<div
				className='burger__whole'
				style={{
					height: `${containerMaxHeight}px`,
					width: `${widestImage}px`,
				}}
			>
				<AnimatePresence initial={false}>{images}</AnimatePresence>
			</div>
		</div>
	);
}

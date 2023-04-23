interface BurgerImageProps {
	checkedItems: CheckedItem[];
	containerHeight: number;
}
interface CheckedItem {
	key: string;
	visibility: boolean;
    width: number;
    height: number;
}

export function BurgerImage({ checkedItems, containerHeight }: BurgerImageProps) {
    const overflowCoefficient = 0.3;
    const minDivisor = 1;
    const maxDivisor = 20;

	const itemsVisible = checkedItems.filter((item) => item.visibility);

    const offset = Math.floor(containerHeight / itemsVisible.length);

    let l = minDivisor;
    let r = maxDivisor;
    while(l < r){
        const mid = Math.floor((l+r)/2);
        const result = itemsVisible.reduce(
			(sum, item) =>
				sum + Math.floor((item.height * overflowCoefficient) / mid),
			0
		);

        if(result > containerHeight) {
            l = l + 1;
        } else {
            r = mid;
        }
    }

    const divisorHeight = l;


    const firstElTopOffset = Math.floor(
		itemsVisible[0].height / divisorHeight / 2
	);


    const images = [];

    for(let i = 0; i < itemsVisible.length; i++){
        const height = Math.floor(
			itemsVisible[i].height / divisorHeight
		);
        const width = itemsVisible[i].width / divisorHeight;

        const lastElemCompensation = Math.floor(itemsVisible[itemsVisible.length - 1].height / divisorHeight / 2.5);

        const elCenter = Math.floor(height / 2);
        let top = Math.max(0, firstElTopOffset + offset * i - elCenter - lastElemCompensation);
        if(i === 1) top = top + itemsVisible[0].height /2;

        const el = (
			<img
				height={height}
                width={width}
				key={itemsVisible[i].key}
				data-order={i}
				id={itemsVisible[i].key}
				src={`./images/${itemsVisible[i].key}.png`}
				alt=''
				style={{ zIndex: 1000 - i, top: `${top}px`, opacity: 0 , animationName: 'add'}}
			/>
		);

        images.push(el);
    }


	return (
		<div
			className='burger__total'
			id='burger-total'
			style={{ height: `${containerHeight}px`	}}
		>
			{images}
		</div>
	);
}

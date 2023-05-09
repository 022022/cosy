export interface BurgerImageProps {
	containerMaxHeight: number;
    containerMaxWidth: number;
}

export interface BurgerGroup {
	categoryId: string;
	category: string;
	sortOrder: number;
	type: 'checkbox' | 'radio' | 'switch';
	options: BurgerOptions[];
}

export interface BurgerOptions {
	id: string;
    sortOrder: number;
	value: string;
	added: boolean;
	info: BurgerInfo;
	image: {
		asset: {
			_ref: string;
		};
	};
	visual: {
		width: number;
		height: number;
		bottom: {
			id: string;
			image: {
				asset: {
					_ref: string;
				};
			};
			visual: { width: number; height: number };
		};
	};
}

export interface BurgerInfo {
	weight: number;
	cost: number;
	calories: number;
	protein: number;
	carbs: number;
	fat: number;
	about: string;
}

export interface BurgerIngredientDetailsProps {
	showNutrition: boolean;
	option: BurgerOptions;
}

export interface BurgerOptionsListProps {
    showNutrition: boolean;

}

export interface BurgerIngredientImageProps {
	height: number;
	width: number;
    id: string;
	i: number;
	top: number;
    src: string;
}

export interface BurgerOrderDetailsProps {
	showNutrition: boolean;
}

export interface ItemsVisible {
	height: number;
	width: number;
	id: string;
    image: {
        asset: {
            _ref: string;
        }
    }
}
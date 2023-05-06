export interface BurgerImageProps {
	containerMaxHeight: number;
}

export enum BurgerOptionsType {'checkbox', 'radio'};

export interface BurgerGroup {
	category: string;
	type: BurgerOptionsType;
	options: BurgerOptions[];
}

export interface BurgerOptions {
	id: string;
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
		bottom: null | {
			id: string;
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
	//burgerOptions: BurgerGroup[];
}
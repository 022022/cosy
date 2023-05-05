export interface BurgerImageProps {
	burgerOptions: BurgerGroup[];
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
	burgerOptions: BurgerGroup[];
	toggleItem: (
		target: string,
		type: BurgerOptionsType,
		checked: boolean
	) => void;
}

export interface BurgerIngredientImageProps {
	height: number;
	width: number;
    id: string;
	i: number;
	top: number;
}

export interface BurgerOrderDetailsProps {
	showNutrition: boolean;
	burgerOptions: BurgerGroup[];
}
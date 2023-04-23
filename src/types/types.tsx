export interface BurgerImageProps {
	burgerOptions: BurgerGroup[];
	containerMaxHeight: number;
}

export interface BurgerGroup {
	category: string;
	type: string;
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
    name: string;
	toggleItem: (target: string, type: string, checked: boolean) => void;
	option: BurgerOptions;
    type: string;
}
export interface BurgerImageProps {
	containerMaxHeight: number;
  orderId: string;
  sizeCoefficient?: number;
}

export interface BurgerGroup {
	categoryId: string;
    showVisual: boolean;
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
	image_sm: {
		asset: {
			_ref: string;
		};
	};
	visual: {
		width: number;
		height: number;
		width_sm: number;
		height_sm: number;
		bottom: {
			id: string;
			image: {
				asset: {
					_ref: string;
				};
			};
			visual: { width: number; height: number };
		};
		bottom_sm: {
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

export interface BurgerIngredientImageProps {
	height: number;
	width: number;
  id: string;
	i: number;
	top: number;
  src: string;
  srcRetina: string;
}


export interface ItemsVisible {
	height: number;
	width: number;
	id: string;
  imageRetina: {
      asset: {
          _ref: string;
      }
  }
  image: {
    asset: {
        _ref: string;
    }
  }
}

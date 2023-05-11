import { createAsyncThunk, createSelector, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchBurger } from '../../services/sanity/burger';
import { BurgerGroup } from '../../types/types';

export interface BurgerState {
	burger: BurgerGroup[] | [];
	burgerOrders: BurgerOrder[];
	status: 'idle' | 'loading' | 'failed';
}

interface BurgerOrder {
	orderId: string;
	quantity: number;
	ingredients: string[];
}

const initialState:BurgerState = {
    burger: [],
    burgerOrders: [{
        orderId: 'new',
        quantity: 1,
        ingredients: ['01_bread-sesame-top', '07_beef', 'salt']
    }],
    status: 'idle',
}

export const getBurger = createAsyncThunk(
	'burger/fetchBurger',
	async () => {
		const response = await fetchBurger();
		return response;
	}
);

export const burgerSlice = createSlice({
	name: 'burger',
	initialState,
	reducers: {
		finalizeOrder: (
			state,
			action: PayloadAction<{ orderId: string; ingredients: string[] }>
		) => {
			if (action.payload.orderId !== 'new') {
				const currentOrder = state.burgerOrders.find(
					(item) => item.orderId === action.payload.orderId
				);
				if (currentOrder)
					currentOrder.ingredients.push(
						...action.payload.ingredients
					);
			} else {
				state.burgerOrders.push({
					orderId: nanoid(),
					ingredients: action.payload.ingredients,
					quantity: 1,
				});
			}
		},
		setQuantity: (state, action: PayloadAction<{ orderId: string, quantity: number }>) => {
			const currentOrder = state.burgerOrders.find(
				(item) => item.orderId === action.payload.orderId
			);
			if (currentOrder) currentOrder.quantity = action.payload.quantity;
		},
		addToOrder: (
			state,
			action: PayloadAction<{ orderId: string; ingredients: string[] }>
		) => {
			const currentOrder = state.burgerOrders.find(
				(item) => item.orderId === action.payload.orderId
			);
			if (currentOrder)
				currentOrder.ingredients.push(...action.payload.ingredients);
		},
		removeFromOrder: (
			state,
			action: PayloadAction<{ orderId: string; ingredients: string[] }>
		) => {
			const currentOrder = state.burgerOrders.find(
				(item) => item.orderId === action.payload.orderId
			);
			if (currentOrder)
				currentOrder.ingredients = currentOrder.ingredients.filter(
					(item) => !action.payload.ingredients.includes(item)
				);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBurger.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(
				getBurger.fulfilled,
				(state, action: PayloadAction<BurgerGroup[]>) => {
					state.status = 'idle';
					state.burger = action.payload;
				}
			)
			.addCase(getBurger.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const { addToOrder, removeFromOrder, finalizeOrder, setQuantity } =
	burgerSlice.actions;

export const selectBurger = createSelector(
    [(state: RootState) => state.burgerConstructor],
    (state) => {
        return {
            status: state.status,
            burgerOrders: state.burgerOrders,
            burger: [...state.burger].sort((a, b) => a.sortOrder - b.sortOrder),
        }
    }
);

export default burgerSlice.reducer;

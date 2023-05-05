import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchBurger } from '../../services/sanity/burger';

export interface BurgerState {
	burger: BurgerGroup[] | [];
	status: 'idle' | 'loading' | 'failed';
}

export enum BurgerOptionsType {
	'checkbox',
	'radio',
}

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

const initialState:BurgerState = {
    burger: [],
    status: 'idle',
}

export const getBurger = createAsyncThunk(
	'burger/getBurger',
	async () => {
		const response = await fetchBurger();
		return response.data;
	}
);

export const burgerSlice = createSlice({
	name: 'burger',
	initialState,
	reducers: {
		toggle: (state) => {
			//state.burger ...
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBurger.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getBurger.fulfilled, (state, action) => {
				state.status = 'idle';
			})
			.addCase(getBurger.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const { toggle } = burgerSlice.actions;

export const selectBurger = (state: RootState) => state.burgerConstructor;

export default burgerSlice.reducer;
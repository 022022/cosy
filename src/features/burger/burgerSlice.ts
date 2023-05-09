import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchBurger } from '../../services/sanity/burger';
import { BurgerGroup } from '../../types/types';

export interface BurgerState {
	burger: BurgerGroup[] | [];
	status: 'idle' | 'loading' | 'failed';
}

const initialState:BurgerState = {
    burger: [],
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
		toggleRadio: (state, action: PayloadAction<{id: string, name: string}>) => {
            for(let i = 0; i < state.burger.length; i++) {
                if (state.burger[i].categoryId === action.payload.name) {
					for (let j = 0; j < state.burger[i].options.length; j++) {
						if (state.burger[i].options[j].id === action.payload.id) {
							state.burger[i].options[j].added = true;
						} else {
							state.burger[i].options[j].added = false;
						}
					}
				}
            }
		},
        toggleCheckbox: (state, action: PayloadAction<{id: string}>) => {
            for(let i = 0; i < state.burger.length; i++) {
                for (let j = 0; j < state.burger[i].options.length; j++) {
                    if (state.burger[i].options[j].id === action.payload.id) {
                        state.burger[i].options[j].added = !state.burger[i].options[j].added;
                    }
                }
            }
        }
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

export const { toggleRadio, toggleCheckbox } = burgerSlice.actions;

export const selectBurger = createSelector(
    [(state: RootState) => state.burgerConstructor],
    (state) => {
        return {
            status: state.status,
            burger: [...state.burger].sort((a, b) => a.sortOrder - b.sortOrder),
        }
    }
);

export default burgerSlice.reducer;

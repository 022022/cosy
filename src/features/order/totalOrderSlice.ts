import {
	createAsyncThunk,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { sendOrder } from '../../services/sanity/totalOrder';
import { BurgerOrder } from '../burger/burgerSlice';

export interface TotalOrderState {
	totalOrder: TotalOrder;
	status: 'idle' | 'sending' | 'failed' | 'success';
}

export interface TotalOrder {
	totalOrderId: string;
	phone: string;
	address: string;
	orderContents: OrderContentsItem[]; // temp
}

export interface OrderContentsItem {
    id: string;
    type: string;
    quantity: number;
    ingredients: string[];
}

export interface BurgerOrderIngredient {
    category: string;
    cost: number;
    sortOrder: number;
    name: string;
}

const initialState: TotalOrderState = {
	totalOrder: {
        totalOrderId: '',
        phone: '',
	    address: '',
	    orderContents: [],
    },
	status: 'idle',
};

export const sendTotalOrder = createAsyncThunk(
	'totalOrder/postOrder',
	async (totalOrder: TotalOrder) => {
		const response = await sendOrder(totalOrder);
		return response;
	}
);

export const totalOrderSlice = createSlice({
	name: 'totalOrder',
	initialState,
	reducers: {
		finalizeTotalOrder: (
			state,
			action: PayloadAction<{
                totalOrderId: string,
				burgerOrders: BurgerOrder[];
				phone: string;
				address: string;
			}>
		) => {
			const orderContents = action.payload.burgerOrders.map((burger) => {
				return {
					id: burger.orderId,
					_key: burger.orderId,
					type: 'burger',
					orderStatus: 'idle',
					quantity: burger.quantity,
					ingredients: burger.ingredients,
				};
			});

			const order = {
                totalOrderId: action.payload.totalOrderId,
				phone: action.payload.phone,
				address: action.payload.address,
				orderContents,
			};

            state.totalOrder = order;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(sendTotalOrder.pending, (state) => {
				state.status = 'sending';
			})
			.addCase(sendTotalOrder.fulfilled, (state) => {
				state.status = 'success';
			})
			.addCase(sendTotalOrder.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const { finalizeTotalOrder } = totalOrderSlice.actions;

export const selectTotalOrderStatus = (state: RootState) =>
	state.totalOrder.status;

export const selectTotalOrder = (state: RootState) =>
	state.totalOrder.totalOrder;

export default totalOrderSlice.reducer;

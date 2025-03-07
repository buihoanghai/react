import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
	id: number;
	name: string;
}

interface ProductState {
	products: Product[];
	loading: boolean;
	error: string | null;
}

const initialState: ProductState = {
	products: [],
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		fetchRequest: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchSuccess: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload;
			state.loading = false;
		},
		fetchFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchRequest, fetchSuccess, fetchFailure } = productSlice.actions;
export default productSlice.reducer;

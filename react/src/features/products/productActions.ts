export const fetchProducts = () => ({
	type: "products/fetchRequest",
});

export const fetchProductsSuccess = (products: any[]) => ({
	type: "products/fetchSuccess",
	payload: products,
});

export const fetchProductsFailure = (error: string) => ({
	type: "products/fetchFailure",
	payload: error,
});

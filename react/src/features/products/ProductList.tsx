import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productActions";
import { RootState, injectSaga, injectReducer } from "../../store/store";
import productReducer from "./productSlice";
import productSaga from "./productSaga";
injectReducer("products", productReducer); // Inject reducer dynamically
injectSaga("productSaga", productSaga);   // Inject saga dynamically
const ProductList = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector((state: RootState) => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{products.map((product, index) => (
					<li key={index}>{product.name}</li>
				))}
			</ul>
		</div>
	);
};

export default ProductList;


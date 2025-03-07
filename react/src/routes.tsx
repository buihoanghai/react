import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

const Login = lazy(() => import("./features/auth/Login"));
const ProductList = lazy(() => import("./features/products/ProductList"));


const AppRoutes = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route element={<PrivateRoute />}>
						<Route path="/products" element={<ProductList />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
};

export default AppRoutes;

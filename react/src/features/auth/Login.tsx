import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { loginRequest } from "./authActions";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, error, isAuthenticated } = useSelector(
		(state: RootState) => state.auth
	);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(loginRequest({ email, password }));
	};

	if (isAuthenticated) {
		navigate("/products"); // Redirect after login
	}

	return (
		<div className="flex items-center justify-center min-h-screen">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded shadow-md w-96"
			>
				<h2 className="text-xl font-bold mb-4">Login</h2>
				{error && <p className="text-red-500">{error}</p>}
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full p-2 mb-2 border rounded"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="w-full p-2 mb-4 border rounded"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white p-2 w-full rounded"
					disabled={loading}
				>
					{loading ? "Logging in..." : "Login"}
				</button>
			</form>
		</div>
	);
};

export default Login;

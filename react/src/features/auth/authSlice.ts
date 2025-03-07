import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	token: string | null;
	loading: boolean;
	error: string | null;
	user: string | null;
	isAuthenticated: boolean;
}

const initialState: AuthState= {
	user: null,
	token: null,
	isAuthenticated: false,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginRequest: (state) => {
			state.loading = true;
			state.error = null;
		},
		loginSuccess: (state, action: PayloadAction<string>) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isAuthenticated = true; // ✅ Ensure it's set correctly
			state.loading = false;
			state.error = null;
		},
		loginFailure: (state, action: PayloadAction<string>) => {
			state.token = null;
			state.loading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;

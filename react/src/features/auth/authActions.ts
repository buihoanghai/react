export enum AuthActionTypes {
	LOGIN_REQUEST = "auth/loginRequest",
	LOGIN_SUCCESS = "auth/loginSuccess",
	LOGIN_FAILURE = "auth/loginFailure",
	LOGOUT = "auth/logout",
}

export interface LoginRequestAction {
	type: AuthActionTypes.LOGIN_REQUEST;
	payload: { email: string; password: string };
}

export interface LoginSuccessAction {
	type: AuthActionTypes.LOGIN_SUCCESS;
	payload: { email: string; token: string };
}

export interface LoginFailureAction {
	type: AuthActionTypes.LOGIN_FAILURE;
	payload: string;
}

export interface LogoutAction {
	type: AuthActionTypes.LOGOUT;
}

export type AuthActions =
	| LoginRequestAction
	| LoginSuccessAction
	| LoginFailureAction
	| LogoutAction;

export const loginRequest = (
	payload: { email: string; password: string }
): LoginRequestAction => ({
	type: AuthActionTypes.LOGIN_REQUEST,
	payload,
});

export const loginSuccess = (
	user: { email: string; token: string }
): LoginSuccessAction => ({
	type: AuthActionTypes.LOGIN_SUCCESS,
	payload: user,
});

export const loginFailure = (error: string): LoginFailureAction => ({
	type: AuthActionTypes.LOGIN_FAILURE,
	payload: error,
});

export const logout = (): LogoutAction => ({
	type: AuthActionTypes.LOGOUT,
});

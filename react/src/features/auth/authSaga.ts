import { takeLatest, put, call } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "./authSlice";

const fakeLoginAPI = async (email: string, password: string) => {
	if (email === "admin" && password === "password") {
		return { token: "fake_access_token" };
	}
	throw new Error("Invalid credentials");
};

function* loginSaga(action: any) {
	try {
		const response = yield call(fakeLoginAPI, action.payload.email, action.payload.password);
		yield put(loginSuccess(response.token));
	} catch (error: any) {
		yield put(loginFailure(error.message));
	}
}

export default function* authSaga() {
	yield takeLatest("auth/loginRequest", loginSaga);
}

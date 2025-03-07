import { takeLatest, put, call } from "redux-saga/effects";
import { fetchSuccess, fetchFailure } from "./productSlice";

const fakeProductAPI = async () => {
	return [
		{ id: 1, name: "Product A" },
		{ id: 2, name: "Product B" },
		{ id: 3, name: "Product C" },
	];
};

function* fetchProductsSaga() {
	try {
		const response = yield call(fakeProductAPI);
		yield put(fetchSuccess(response));
	} catch (error: any) {
		yield put(fetchFailure(error.message));
	}
}

export default function* productSaga() {
	yield takeLatest("products/fetchRequest", fetchProductsSaga);
}

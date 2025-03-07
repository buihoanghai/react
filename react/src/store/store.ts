import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

// Dummy initial reducer (Prevents "Store does not have a valid reducer" error)
const initialReducer = (state = {}) => state;

// Maintain a reference for dynamically injected reducers
const injectedReducers: Record<string, any> = { placeholder: initialReducer };
const sagaMiddleware = createSagaMiddleware();
// Create saga middleware
// Track injected sagas
const injectedSagas: Record<string, Task | undefined> = {};

const rootReducer = combineReducers(injectedReducers);

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
// Function to inject sagas dynamically
export const injectSaga = (key: string, saga: Saga) => {
	if (!injectedSagas[key]) {
		injectedSagas[key] = sagaMiddleware.run(saga);
	}
};

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * Inject a new reducer dynamically.
 */
export const injectReducer = (key: string, reducer: any) => {
	if (!injectedReducers[key]) {
		injectedReducers[key] = reducer;
		store.replaceReducer(combineReducers(injectedReducers));
	}
};

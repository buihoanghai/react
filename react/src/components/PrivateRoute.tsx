import {Navigate, Outlet} from "react-router-dom";
import {injectSaga, injectReducer, RootState} from "../store/store";
import authReducer from "../features/auth/authSlice";
import authSaga from "../features/auth/authSaga";
import {useSelector} from "react-redux";
// Inject reducers and sagas dynamically when the app starts
injectReducer("auth", authReducer);
// injectSaga("authSaga", authSaga);
const PrivateRoute = () => {
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
	return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>;
};

export default PrivateRoute;

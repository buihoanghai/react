import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
// Inject reducers and sagas dynamically when the app starts
const PrivateRoute = () => {
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
	return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>;
};

export default PrivateRoute;

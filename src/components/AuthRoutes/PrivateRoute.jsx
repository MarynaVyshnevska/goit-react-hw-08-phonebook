import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { selectorAuthToken } from "../../redux/auth/auth.selector"

export const PrivateRoute = () => {
    const token = useSelector(selectorAuthToken);
    return token ? <Outlet /> : <Navigate to='/login' replace/>;
    
}
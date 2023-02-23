import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectorAuthToken } from "../../redux/auth/auth.selector"

export const PublicRoute = () => {
    const token = useSelector(selectorAuthToken);
    const location = useLocation();

    return token ? <Navigate to={location.state?.from ?? '/'} replace/> : <Outlet />;
}
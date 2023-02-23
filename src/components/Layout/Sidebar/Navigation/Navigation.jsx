import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { selectorAuthProfile, selectorAuthToken } from "redux/auth/auth.selector";
import { getProfileThunk } from "redux/auth/auth.thunk";





const getActiveClassName = ({ isActive }) => {
  return isActive ? 'btn nav-btn btn-light active' : 'btn nav-btn btn-light';
};

export const Navigation = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectorAuthToken);
    const profile = useSelector(selectorAuthProfile);
    

    const location = useLocation();
    
    useEffect(() => {
        if (token) {
            dispatch(getProfileThunk());
        }
    }, [token, dispatch]);

    return (
        <div
            className="d-flex flex-column justify-content-between h-100"
        >
            <div
                className="d-flex flex-column justify-content-between"
            >
                {!token && <h2 className="h3 mb-4">Please log in!</h2>}
                
                {token && (
                    <>
                        <h2 className="h3 mb-4">Welcome back, {profile.user.name}!</h2>
                        <p>Your registered email is {profile.user.email}</p>
                    </>
                )}

                <NavLink to='' className={getActiveClassName}>
                    Home page
                </NavLink>

                {token ?
                    <>
                        <NavLink to='create' className={getActiveClassName}>
                            Create new contact
                        </NavLink>
                        <NavLink to='search' className={getActiveClassName}>
                            Find contact
                        </NavLink>

                    </> : <>
                        <NavLink to='join' className={getActiveClassName}>
                            Create new user
                        </NavLink>
                        <NavLink to='login' className={getActiveClassName}>
                            Log in
                        </NavLink>
                    </>
                }
            </div>
        </div>
    )
}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth.selector";
import { selectProfile } from "redux/profile/profile.selector";
import { getProfileThunk } from "redux/profile/profile.thunk";


const getActiveClassName = ({ isActive }) => {
  return isActive ? 'btn nav-btn btn-light active' : 'btn nav-btn btn-light';
};

export const Navigation = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectAuthToken);
    const profile = useSelector(selectProfile);
        
    console.log(token);
    

    // const location = useLocation();
    
    useEffect(() => {
        if (token) {
            dispatch(getProfileThunk());
        }
    }, [token, dispatch]);
    console.log(profile);
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
                        <h2 className="h3 mb-4">Welcome back, {}!</h2>
                        <p>Your registered email is {}</p>
                    </>
                )}

                <NavLink to='' className={getActiveClassName}>
                    Home page
                </NavLink>

                {token ?
                    <>
                        <NavLink to='contacts' className={getActiveClassName}>
                            PhoneBook
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
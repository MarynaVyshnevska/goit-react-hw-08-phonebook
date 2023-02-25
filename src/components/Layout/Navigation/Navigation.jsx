import { CottageRounded, ExitToAppRounded, MenuBookRounded } from "@mui/icons-material";
import { Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuthToken, selectAuthValues } from "redux/auth/auth.selector";
import { authLogOutThunk } from "redux/auth/auth.thunk";
import { getUserThunk } from "redux/user/user.thunk";
import { HeaderAppBar, HeaderButton, HeaderIconButton } from "./Navigation.styled";

export const Navigation = ({title}) => {
    const dispatch = useDispatch();
    const token = useSelector(selectAuthToken);
    const profile = useSelector(selectAuthValues);
        
    useEffect(() => {
        if (token) {
            dispatch(getUserThunk());
        }
    }, [token, dispatch]);
    // console.log(profile);
    return (
        <HeaderAppBar position="static">
            <Toolbar>
                <HeaderIconButton
                        component={Link}
                        color="inherit"
                        to='/'
                        sx={{mr: '8px'}}
                    >
                        <CottageRounded />
                    </HeaderIconButton>
                    
                    <Typography
                        variant="h4"
                        component='span'
                        align="center"
                        sx={{ flexGrow: 1 }}
                    >
                        {title}
                    </Typography>

                {token ?
                    <>
                        <HeaderButton
                                component={Link}
                                color="inherit"
                                to='contacts'

                            >
                                {profile.name}'s <MenuBookRounded sx={{ml: '8px', mr: '8px'}}/>
                        </HeaderButton>
                        <HeaderIconButton
                            aria-label="LogOut"
                            color="inherit"
                            onClick={() => dispatch(authLogOutThunk())}
                        >
                            <ExitToAppRounded/>
                        </HeaderIconButton>

                    </> : <>
                        <HeaderButton
                                component={Link}
                                // color="inherit"
                                variant="contained"
                                // disableElevation
                                to='join'
                                sx={{mr: '8px'}}
                            >
                                Register
                            </HeaderButton>
                            <HeaderButton
                                component={Link}
                                // color="inherit"
                                variant="contained"
                                to='login'
                            >
                            LogIn
                            </HeaderButton>
                    </>
                }
            </Toolbar>
        </HeaderAppBar>
    )
}
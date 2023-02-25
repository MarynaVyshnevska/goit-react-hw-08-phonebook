import React from "react";
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { AppRegistrationRounded, CottageRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth.selector";


const Header = ({ title }) => {
    // const navigate = useNavigate();
    const token = useSelector(selectAuthToken);
    
    return (
          
        <>
        
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                    >
                        <CottageRounded />
                    </IconButton>
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
                            <IconButton
                                color="inherit"
                            >
                                <AppRegistrationRounded />
                            </IconButton>
                        </>
                    
                        : <>
                            <button>
                            Register
                            </button>
                            <button>
                            LogIn
                            </button>
                        </>
                           
                }
                
                    
                </Toolbar>
            </AppBar>
        </>
    
    )
}

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
    
}
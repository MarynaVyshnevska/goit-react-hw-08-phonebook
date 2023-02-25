// import { Sidebar } from "./Sidebar/Sidebar"
import { PropTypes } from "prop-types";
import { Box } from "@mui/material";
import { Navigation } from "./Navigation/Navigation";
// import { useEffect } from "react";
// import { getUserThunk } from "redux/user/user.thunk";

export const Layout = ({ children }) => {
    


    
      
    return (
        <Box
            sx={{
                m: '0 auto',
                width: '100%',
                minWidth: 360,
                bgcolor: 'background.paper'
            }}
        >
            <Navigation title='My Virtual PhoneBook'/>           
            <main
                className=""
                style={{ minHeight: '100vh' }}  
            >
                <div
                    className="tab-pane fade show active"
                >
                    {children}
                </div>
            </main>
        </Box>
        
    )
}

Layout.propType = {
  children: PropTypes.node.isRequired,
};
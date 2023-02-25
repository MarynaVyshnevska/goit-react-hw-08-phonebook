import { Sidebar } from "./Sidebar/Sidebar"
import { PropTypes } from "prop-types";
import { Box } from "@mui/material";

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
            <Sidebar />
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
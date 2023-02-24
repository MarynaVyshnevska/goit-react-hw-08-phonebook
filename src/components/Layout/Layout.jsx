import { Sidebar } from "./Sidebar/Sidebar"
import { PropTypes } from "prop-types";
// import { useSelector } from "react-redux";
// import { selectAuthToken } from "redux/auth/auth.selector";

export const Layout = ({ children }) => {
    // const token = useSelector(selectAuthToken);
    return (
        <div className="">
            <Sidebar />
            <main
                className=""
                // style={{ minHeight: '100vh' }}  
            >
                <div
                    // className="tab-pane fade show active"
                >
                    {children}
                </div>
            </main>
        </div>
    )
}

Layout.propType = {
  children: PropTypes.node.isRequired,
};
import { Sidebar } from "./Sidebar/Sidebar"
import { PropTypes } from "prop-types";

export const Layout = ({ children }) => {
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
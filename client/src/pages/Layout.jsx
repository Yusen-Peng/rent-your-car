import { Outlet } from "react-router-dom";
import Header from "../components/Header";

//a template file for the layout
function Layout() {
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layout;